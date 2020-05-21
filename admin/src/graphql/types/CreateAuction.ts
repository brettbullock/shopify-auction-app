/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AuctionCreateInput } from "./../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateAuction
// ====================================================

export interface CreateAuction_createAuction_product {
  __typename: "Product";
  title: string | null;
}

export interface CreateAuction_createAuction {
  __typename: "Auction";
  id: string;
  product: CreateAuction_createAuction_product | null;
}

export interface CreateAuction {
  createAuction: CreateAuction_createAuction;
}

export interface CreateAuctionVariables {
  input: AuctionCreateInput;
}
