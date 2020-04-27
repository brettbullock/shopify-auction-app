import mongoose from 'mongoose';

const initDB = () => {
  mongoose.connect(
    'mongodb://127.0.0.1:27017/shopify-auction-app',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
};

export default initDB;