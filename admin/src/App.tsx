import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import history from './history';
import New from './Auctions/New';
import Index from './Index/Index';
import Auctions from './Auctions/Auctions';


function App() {
  return (
    <BrowserRouter basename="/admin">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/auctions/new" component={New} />
        <Route exact path="/auctions" component={Auctions} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
