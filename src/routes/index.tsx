import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
