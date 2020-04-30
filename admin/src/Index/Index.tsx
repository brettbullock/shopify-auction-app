import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/react-hooks';
import {
  EmptyState
} from '@shopify/polaris';
import {
  Link,
  useHistory
} from 'react-router-dom';

import Auctions from '../Auctions/Auctions';

const queryAuctions = loader('../graphql/queryAuctions.graphql');
const context = {};

function Index() {
  const [ auctionData, setAuctionData ] = useState(false);
  const { loading, data, error } = useQuery(queryAuctions);
  const history = useHistory();

  if (loading) return <div>loading...</div>

  return (
    <>
      { data.auctions.length !== 0
        ? <Auctions auctions={auctionData} />
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
    </>
  );
}

export default Index;