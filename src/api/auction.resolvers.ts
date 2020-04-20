import mongoose from 'mongoose';
import auctionSchema from '../models/auction';

const Auction = mongoose.model('Auction', auctionSchema);

const resolvers = {
  Query: {
    auctions: async () => await Auction.find(),
    auction: async (obj, { id }) => await Auction.findById(id)
  },
  Mutation: {
    createAuction: async (obj, { input }) => await Auction.create(
      input,
      (err, doc) => {
        console.log(doc);
        return doc;
      }
    ),
    updateAuction: async (obj, { input }) => await Auction.findByIdAndUpdate(
      input.id,
      input,
      (err, doc) => {
        console.log(doc);
        return doc;
      }
    ),
    deleteAuction: async (obj, { auctionId }) => await Auction.findByIdAndDelete(
      auctionId,
      (err, doc) => {
        console.log(doc);
        return doc;
      }
    ),
    deleteAuctions: async (obj, { auctionIds }) => {
      const deletedIds = [];
      await auctionIds.forEach(id => {
        Auction.findByIdAndDelete(
          id,
          (err, doc) => {
            console.log(doc);
            deletedIds.push(doc);
          }
        );
      });
      return deletedIds;
    },
    publishAuction: async (obj, { auctionId }) => await Auction.findByIdAndUpdate(
      auctionId,
      { published: true },
      (err, doc) => {
        console.log(doc);
        return doc;
      }
    )
  }
};

export default resolvers;