import React from 'react';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { EmptyState } from '@shopify/polaris';

import history from './history';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <EmptyState
        heading="Welcome to the backend"
        action={{
          content: 'Create Auction',
          onAction: () => console.log('js is working')
        }}
        secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
      >
        <p>This is just a test</p>
      </EmptyState>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
