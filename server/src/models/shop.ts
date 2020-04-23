import mongoose from 'mongoose';

const shopSchema = mongoose.Schema({
  shop: String,
  accessToken: String
});

export default shopSchema;