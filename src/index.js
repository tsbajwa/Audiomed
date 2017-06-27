import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routing/Routes';

require('./style/main.scss');

ReactDOM.render(
<Router>
  <Routes />
</Router>
, document.getElementById('app'),
);
