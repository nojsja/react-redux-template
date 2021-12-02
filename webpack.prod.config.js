const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const manifest = require('./vendor-manifest.json')

// 拆分静态库
const dllRefPlugin = new webpack.DllReferencePlugin({
  context: __dirname,
  manifest: require(path.resolve('./vendor-manifest.json')),
});

module.exports = {
  entry: [
    './index.tsx',
  ],
  // devtool: 'hidden-source-map',
  mode: 'production',
  output: {
    filename: 'bundle_[hash:8].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      // dir
      resources: path.resolve(__dirname, 'resources'),
      src: path.resolve(__dirname, 'src'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
      stores: path.resolve(__dirname, 'src/stores'),
      router: path.resolve(__dirname, 'src/router'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    noParse:[/jquery/],
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ['happypack/loader?id=babel']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // by default it uses publicPath in webpackOptions.output
              publicPath: path.join(__dirname, 'dist/'),
            },
          },
          {
            loader: 'css-loader',
            options: { minimize: true },
          }
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: path.join(__dirname, 'dist/'),
            },
          },
          {
            loader: 'css-loader',
            options: { minimize: true }
          },
          {
            loader: 'less-loader',
          }
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(ico|woff|eot|ttf|woff2|icns)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 500, // 小于500B的文件直接写入bunndle
              name: '[name]_[hash:8].[ext]',
              outputPath: 'resources/assets',
            },
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'resources/images',
            },
          }
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    dllRefPlugin,
    new HappyPack({
      id: 'babel',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.ejs',
      inject: 'body',
      publicPath: './',
      vendor:  `dll_${manifest.name}.js`,
      minify: false
    }),
  ],

  optimization: {
  }
};
