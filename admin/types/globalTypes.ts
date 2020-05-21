/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AuctionCreateInput {
  product?: ProductInput | null;
  startingBid?: string | null;
  bidIncrements?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  published?: boolean | null;
}

export interface FeaturedImageInput {
  originalSrc?: string | null;
}

export interface ProductInput {
  id: string;
  handle?: string | null;
  title?: string | null;
  description?: string | null;
  featuredImage?: FeaturedImageInput | null;
  productType?: string | null;
  tags?: (string | null)[] | null;
  vendor?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
