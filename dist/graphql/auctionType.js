"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const AuctionType = new graphql_1.GraphQLObjectType({
    name: 'Auction',
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        product: { type: graphql_1.GraphQLString },
        startingBid: {
            type: graphql_1.GraphQLString,
            resolve() {
                return "5";
            }
        },
        bidIncrements: { type: graphql_1.GraphQLString },
        startDate: { type: graphql_1.GraphQLString },
        endDate: { type: graphql_1.GraphQLString },
        published: { type: graphql_1.GraphQLBoolean }
    })
});
exports.default = AuctionType;
//# sourceMappingURL=auctionType.js.map