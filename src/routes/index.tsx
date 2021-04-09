import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  useHistory,
  Redirect,
} from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/dashboard';
import { Home } from '../pages/Home/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard/home" component={Dashboard}>
        {/* <Redirect to="/"></Redirect> */}
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
