const path = require('path');
const webpack = require('webpack');
const os = require('os');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cpuLength = os.cpus().length;

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, './index.tsx'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      // dir
      resources: path.resolve(__dirname, 'resources'),
      src: path.resolve(__dirname, 'src'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
      stores: path.resolve(__dirname, 'src/stores'),
      router: path.resolve(__dirname, 'src/router'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    noParse:[/jquery/],
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /(\.js?|\.jsx?)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader?cacheDirectory"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx'],
      context: path.resolve(__dirname, './'),
      threads: cpuLength > 4 ? 4 : cpuLength,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      minify: true
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 2,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          name: 'vendors_[hash:8].[ext]',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          name: 'bundle_[hash:8].[ext]',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }
  },

  devServer: {
    host: 'localhost',
    port: 3001,
    compress: true,
    contentBase: '.',
    historyApiFallback: true,
    hot: true,
    inline: true,
    liveReload: false
  },
};
