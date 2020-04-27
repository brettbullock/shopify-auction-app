import React from 'react';
import { Router, Route, Switch } from 'react-router';

import history from './history';
import New from './Auction/New';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/new" exact component={New} />
      </Switch>
    </Router>
  );
};

export default Routes;