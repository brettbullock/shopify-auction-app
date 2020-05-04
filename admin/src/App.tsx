import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import New from './Auctions/New';
import Home from './Home';
import { 
  Button, 
  Card, 
  Layout 
} from '@shopify/polaris';


function App() {

  return (
    <BrowserRouter basename="/admin">
      <Card>
        <Link to="/auctions/new">
          <Button primary>New</Button>
        </Link>
        <Link to="/auctions">
          <Button primary>List</Button>
        </Link>
      </Card>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auctions/new" component={New} />
        <Route exact path="/auctions" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
