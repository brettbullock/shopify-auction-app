"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type Product {
    id: ID!
    handle: String
    title: String
    description: String
    featuredImage: {
      originalSrc: String
    }
    productType: String
    tags: [String]
    vendor: String
  }

  type Auction {
    id: ID!
    product: Product
    startingBid: String
    bidIncrements: String
    startDate: String
    endDate: String
    published: Boolean!
  }

  type Query {
    auctions: [Auction]!
    auction(id: ID!): Auction
  }

  type deletedAuctionId {
    deletedAuctionId: ID
  }

  type deletedAuctionIds {
    deletedAuctionIds: [ID]!
  }

  type PublishedAuction {
    auctionId: ID!
    published: Boolean
  }

  type Mutation {
    createAuction(input: Auction!): Auction!
    updateAuction(input: Auction!): Auction!
    deleteAuction(auctionId: ID!): deletedAuctionId!
    deleteAuctions(auctionIds: [ID]!): deletedAuctionIds!
    publishAuction(auctionId: ID!): PublishedAuction!
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=auction.js.map