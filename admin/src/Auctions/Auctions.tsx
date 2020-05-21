import React from 'react';

import {
  Avatar,
  Badge,
  Card,
  ResourceList,
  ResourceItem,
  TextStyle
} from '@shopify/polaris';

const Auctions = ({ auctions }: any) => {

  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'auction', plural: 'auctions'}}
        items={auctions}
        renderItem={(auction) => {
          const {id, startingBid, bidIncrements, startDate, endDate, published} = auction;
          const media = <Avatar customer size="medium" />;

          return (
            <ResourceItem
              verticalAlignment="center"
              id={id}
              url={"google.ca"}
              media={media}
              accessibilityLabel={`View details for `}
              name={'First Product'}
            >
              <h3>
                <TextStyle variation="strong">First Product</TextStyle>
              </h3>
              <div>{startDate}</div>
              <div>
                <Badge status={published ? "info" : "warning"}>
                  {published ? "published" : "not published"}
                </Badge>
              </div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
};

export default Auctions;