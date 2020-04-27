import '@shopify/polaris/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import translations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';

import App from './App';
import * as serviceWorker from './serviceWorker';

const shopOrigin = Cookies.get('shopOrigin');

const { 
  REACT_APP_SHOPIFY_API_KEY 
} = process.env;

const config = { 
  apiKey: REACT_APP_SHOPIFY_API_KEY as string, 
  shopOrigin: shopOrigin as string,
  forceRedirect: true
};

ReactDOM.render(
  <React.StrictMode>
    <Provider config={config}>
      <AppProvider i18n={translations}>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
