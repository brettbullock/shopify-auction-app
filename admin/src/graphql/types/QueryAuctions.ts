/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAuctions
// ====================================================

export interface QueryAuctions_auctions_product {
  __typename: "Product";
  title: string | null;
}

export interface QueryAuctions_auctions {
  __typename: "Auction";
  product: QueryAuctions_auctions_product | null;
  startingBid: string | null;
  bidIncrements: string | null;
  startDate: string | null;
  endDate: string | null;
  published: boolean | null;
}

export interface QueryAuctions {
  auctions: (QueryAuctions_auctions | null)[];
}
