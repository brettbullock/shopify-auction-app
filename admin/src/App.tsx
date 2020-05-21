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
  Layout,
  Stack
} from '@shopify/polaris';


function App() {

  return (
    <BrowserRouter basename="/admin">
      <Layout>
        <Layout.Section>
          <Card>
            <Stack spacing="loose">
              <Link to="/auctions/new">
                <Button primary>New</Button>
              </Link>
              <Link to="/auctions">
                <Button primary>List</Button>
              </Link>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auctions/new" component={New} />
            <Route exact path="/auctions" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Layout.Section>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
