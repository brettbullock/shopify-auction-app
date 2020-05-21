export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  HTML: any;
  Money: any;
};

export type Auction = {
   __typename?: 'Auction';
  id: Scalars['ID'];
  product?: Maybe<Product>;
  startingBid?: Maybe<Scalars['String']>;
  bidIncrements?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type AuctionCreateInput = {
  product?: Maybe<ProductInput>;
  startingBid?: Maybe<Scalars['String']>;
  bidIncrements?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type AuctionUpdateInput = {
  id: Scalars['ID'];
  product?: Maybe<ProductInput>;
  startingBid?: Maybe<Scalars['String']>;
  bidIncrements?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type FulfillmentService = {
   __typename?: 'FulfillmentService';
  id: Scalars['ID'];
  inventoryManagement?: Maybe<Scalars['Boolean']>;
  productBased?: Maybe<Scalars['Boolean']>;
  serviceName?: Maybe<Scalars['String']>;
  type: FulfillmentServiceType;
};

export type FulfillmentServiceInput = {
  id: Scalars['ID'];
  inventoryManagement?: Maybe<Scalars['Boolean']>;
  productBased?: Maybe<Scalars['Boolean']>;
  serviceName?: Maybe<Scalars['String']>;
  type: FulfillmentServiceType;
};

export enum FulfillmentServiceType {
  GiftCard = 'GIFT_CARD',
  Manual = 'MANUAL',
  ThirdParty = 'THIRD_PARTY'
}


export type DeletedAuctionId = {
   __typename?: 'deletedAuctionId';
  deletedAuctionId?: Maybe<Scalars['ID']>;
};

export type DeletedAuctionIds = {
   __typename?: 'deletedAuctionIds';
  deletedAuctionIds: Array<Maybe<Scalars['ID']>>;
};


export type Image = {
   __typename?: 'Image';
  altText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  originalSrc?: Maybe<Scalars['String']>;
};

export type ImageInput = {
  altText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  originalSrc?: Maybe<Scalars['String']>;
};

export type InventoryItem = {
   __typename?: 'InventoryItem';
  id: Scalars['ID'];
};

export type InventoryItemInput = {
  id: Scalars['ID'];
};


export type Product = {
   __typename?: 'Product';
  availablePublicationCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  descriptionHtml: Scalars['HTML'];
  handle: Scalars['String'];
  hasOnlyDefaultVariant: Scalars['Boolean'];
  id: Scalars['ID'];
  images: Array<Maybe<Image>>;
  options: Array<ProductOption>;
  productType: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  tags: Array<Scalars['String']>;
  templateSuffix?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  totalInventory: Scalars['Int'];
  tracksInventory: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  variants: Array<Maybe<ProductVariant>>;
  vendor: Scalars['String'];
};

export type ProductInput = {
  availablePublicationCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  descriptionHtml: Scalars['HTML'];
  handle: Scalars['String'];
  hasOnlyDefaultVariant: Scalars['Boolean'];
  id: Scalars['ID'];
  images: Array<Maybe<ImageInput>>;
  options: Array<ProductOptionInput>;
  productType: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  tags: Array<Scalars['String']>;
  templateSuffix?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  totalInventory: Scalars['Int'];
  tracksInventory: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  variants: Array<Maybe<ProductVariantInput>>;
  vendor: Scalars['String'];
};

export type ProductOption = {
   __typename?: 'ProductOption';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductOptionInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductVariant = {
   __typename?: 'ProductVariant';
  availableForSale: Scalars['Boolean'];
  barcode?: Maybe<Scalars['String']>;
  compareAtPrice?: Maybe<Scalars['Money']>;
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  fulfillmentService?: Maybe<FulfillmentService>;
  id: Scalars['ID'];
  image?: Maybe<Image>;
  inventoryItem: InventoryItem;
  /** @deprecated Use tracked attribute on `inventoryItem` instead. */
  inventoryManagement: ProductVariantInventoryManagement;
  inventoryPolicy: ProductVariantInventoryPolicy;
  inventoryQuantity?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
  price: Scalars['Money'];
  product: VariantProduct;
  /** @deprecated Use `InventoryItem.requiresShipping` instead. */
  requiresShipping: Scalars['Boolean'];
  selectedOptions: Array<SelectedOption>;
  sku?: Maybe<Scalars['String']>;
  taxable: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['Float']>;
  weightUnit: WeightUnit;
};

export type ProductVariantInput = {
  availableForSale: Scalars['Boolean'];
  barcode?: Maybe<Scalars['String']>;
  compareAtPrice?: Maybe<Scalars['Money']>;
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  fulfillmentService?: Maybe<FulfillmentServiceInput>;
  id: Scalars['ID'];
  image?: Maybe<ImageInput>;
  inventoryItem: InventoryItemInput;
  inventoryManagement: ProductVariantInventoryManagement;
  inventoryPolicy: ProductVariantInventoryPolicy;
  inventoryQuantity?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
  price: Scalars['Money'];
  product: VariantProductInput;
  requiresShipping: Scalars['Boolean'];
  selectedOptions: Array<SelectedOptionInput>;
  sku?: Maybe<Scalars['String']>;
  taxable: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['Float']>;
  weightUnit: WeightUnit;
};

export enum ProductVariantInventoryManagement {
  Shopify = 'SHOPIFY',
  NotManaged = 'NOT_MANAGED',
  FulfillmentService = 'FULFILLMENT_SERVICE'
}

export enum ProductVariantInventoryPolicy {
  Deny = 'DENY',
  Continue = 'CONTINUE'
}

export type PublishedAuction = {
   __typename?: 'PublishedAuction';
  auctionId: Scalars['ID'];
  published?: Maybe<Scalars['Boolean']>;
};

export type SelectedOption = {
   __typename?: 'SelectedOption';
  value?: Maybe<Scalars['String']>;
};

export type SelectedOptionInput = {
  value?: Maybe<Scalars['String']>;
};

export type VariantProduct = {
   __typename?: 'VariantProduct';
  id: Scalars['ID'];
};

export type VariantProductInput = {
  id: Scalars['ID'];
};

export enum WeightUnit {
  Kilograms = 'KILOGRAMS',
  Grams = 'GRAMS',
  Pounds = 'POUNDS',
  Ounces = 'OUNCES'
}

export type Mutation = {
   __typename?: 'Mutation';
  createAuction: Auction;
  updateAuction: Auction;
  deleteAuction: DeletedAuctionId;
  deleteAuctions: DeletedAuctionIds;
  publishAuction: PublishedAuction;
};


export type MutationCreateAuctionArgs = {
  input: AuctionCreateInput;
};


export type MutationUpdateAuctionArgs = {
  input: AuctionUpdateInput;
};


export type MutationDeleteAuctionArgs = {
  auctionId: Scalars['ID'];
};


export type MutationDeleteAuctionsArgs = {
  auctionIds: Array<Maybe<Scalars['ID']>>;
};


export type MutationPublishAuctionArgs = {
  auctionId: Scalars['ID'];
};

export type Query = {
   __typename?: 'Query';
  auctions: Array<Maybe<Auction>>;
  auction?: Maybe<Auction>;
};


export type QueryAuctionArgs = {
  id: Scalars['ID'];
};
