import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import Updating from '../Updating';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/updating' component={Updating}/>
    </Switch>
  );
}
