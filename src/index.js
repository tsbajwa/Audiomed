import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Helpers/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>
  , document.getElementById('app'),
  );
registerServiceWorker();
