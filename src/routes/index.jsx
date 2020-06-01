import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FeedRoute from './FeedRoute';
import UsersRoute from './UsersRoute';
import ProfileRoute from './ProfileRoute';
import NewUserRoute from './NewUserRoute';
import EditUserRoute from './EditUserRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <FeedRoute />
    </Route>

    <Route exact path="/users">
      <UsersRoute />
    </Route>

    <Route path="/users/:username">
      <ProfileRoute />
    </Route>

    <Route path="/newuser">
      <NewUserRoute />
    </Route>

    <Route path="/edituser/:id">
      <EditUserRoute />
    </Route>
  </Switch>
);

export default Routes;
