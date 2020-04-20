"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const auction_1 = __importDefault(require("../models/auction"));
const Auction = mongoose_1.default.model('Auction', auction_1.default);
const resolvers = {
    Query: {
        auctions: () => Auction.find()
    }
};
exports.default = resolvers;
//# sourceMappingURL=auction.resolvers.js.map