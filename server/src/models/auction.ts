import mongoose from 'mongoose';

const auctionSchema = mongoose.Schema({
  product: Object,
  startingBid: String,
  bidIncrements: String,
  startDate: Date,
  endDate: Date,
  published: Boolean
});

export default auctionSchema;