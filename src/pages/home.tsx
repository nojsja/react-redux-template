import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useDispatch } from "react-redux";

import { RouteConfig } from '../types';
import { useTypedSelector } from '../stores/reducers/index';
import { minusNumber, addNumberAsync } from '../stores/actions/count';
import RouteWithSubRoutes from '../router/RouteWithSubRoutes';

import logo from '../logo.svg';
import tauriCircles from '../tauri.svg';
import tauriWord from '../wordmark.svg';
import { history } from '../App';

type AppProps = {
  routes: RouteConfig[]
}

export default function Home(props: AppProps) {

  const { routes } = props;
  const dispatch = useDispatch();
  const count = useTypedSelector(state => state.count);

  useEffect(() => {
    console.log('Home: useEffect');
  }, []);

  return (
    <Row className="App">
      <Col span={24}>
        <header className="App-header">
          <div>
            <button
              aria-label="Increment value"
              className="App-link"
              onClick={() => dispatch(addNumberAsync(2))}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              className="App-link"
              onClick={() => dispatch(minusNumber())}
            >
              Decrement
            </button>
          </div>
          <div className="inline-logo">
            <img src={tauriCircles} className="App-logo rotate" alt="logo" />
            <img src={tauriWord} className="App-logo smaller" alt="logo" />
          </div>
          <a
            className="App-link"
            href="https://tauri.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Tauri
          </a>
          <img src={logo} className="App-logo rotate" alt="logo" />
          <button
            className="App-link"
            onClick={() => { history.push('/page1'); }}
          >
            Go to page 1
          </button>
          <button
            className="App-link"
            onClick={() => { history.push('/'); }}
          >
            Home
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            {
              routes && routes.map((route, i) =>
                <RouteWithSubRoutes key={`${route.path}_${i}`} route={route} />
              )
            }
          </p>
        </header>
      </Col>
    </Row>
  )
}
