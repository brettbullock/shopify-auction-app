import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/react-hooks';
import {
  EmptyState, Card
} from '@shopify/polaris';
import {
  useHistory
} from 'react-router-dom';

import Auctions from '../Auctions/Auctions';

const queryAuctions = loader('../graphql/queryAuctions.graphql');

function Home() {
  const { loading, data, error } = useQuery(queryAuctions);
  const history = useHistory();

  if (loading) return <div>loading...</div>
  
  return (
    <Card>
      { data.auctions.length !== 0
        ? <Auctions auctions={data.auctions} />
        : <EmptyState
          heading="Welcome to the backend"
          action={{
            content: 'Create Auction',
            onAction: () => {
              history.push("/auctions/new");
            }
          }}
          secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        >
          <p>This is just a test</p>
        </EmptyState>
      }
    </Card>
  );
}

export default Home;