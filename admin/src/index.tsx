import '@shopify/polaris/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import ApolloClient from 'apollo-client';
import translations from '@shopify/polaris/locales/en.json';

import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';
import * as serviceWorker from './serviceWorker';

const {
  REACT_APP_SHOPIFY_API_KEY
} = process.env;

const cache = new InMemoryCache();
const link = new HttpLink({
  fetchOptions: {
    mode: 'cors'
  }
});
const client = new ApolloClient({
  cache,
  link
});

const shopOrigin = Cookies.get('shopOrigin');

const config = {
  apiKey: REACT_APP_SHOPIFY_API_KEY as string,
  shopOrigin: shopOrigin as string,
  forceRedirect: true
};

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider config={config}>
        <AppProvider i18n={translations}>
          <App />
        </AppProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
