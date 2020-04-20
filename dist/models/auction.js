"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const auctionSchema = mongoose_1.default.Schema({
    product: Object,
    startingBid: String,
    bidIncrements: String,
    startDate: Date,
    endDate: Date,
    published: Boolean
});
exports.default = auctionSchema;
//# sourceMappingURL=auction.js.map