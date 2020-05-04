import React from 'react';

import {
  Card,
  Layout
} from '@shopify/polaris';

import NewAuctionForm from './components/NewAuctionForm';

const New = () => {
  return (
    <Layout.AnnotatedSection
      title="Create Auction"
      description="Create an auction by defining all of its characteristics."
    >
      <Card sectioned>
        <NewAuctionForm/>
      </Card>
    </Layout.AnnotatedSection>
  );
};

export default New;