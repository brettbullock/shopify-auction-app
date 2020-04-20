"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const graphql_1 = require("graphql");
const auctionType_1 = __importDefault(require("./auctionType"));
const auction_1 = __importDefault(require("../models/auction"));
const Auction = mongoose_1.default.model('Auction', auction_1.default);
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        auction: {
            type: auctionType_1.default,
            args: { id: { type: graphql_1.GraphQLString } },
            resolve(parent, args) {
                const found = Auction.findOne({ _id: args.id });
                console.log(found);
                console.log("cheese");
                return found;
            }
        },
        hello: {
            type: graphql_1.GraphQLString,
            resolve() {
                return "hello world!";
            }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery
});
//# sourceMappingURL=schema.js.map