import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Helpers/Routes';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-105588037-1', { debug: true });

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <Router onUpdate={logPageView}>
    <Routes />
  </Router>
  , document.getElementById('app'),
  );
registerServiceWorker();
