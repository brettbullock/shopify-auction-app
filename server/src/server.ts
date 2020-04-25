import 'isomorphic-fetch';
import 'dotenv/config';

import * as path from 'path';
import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import session from 'koa-session';
import Logger from 'koa-logger';
import mongoose from 'mongoose';
import serve from 'koa-static';
import mount from 'koa-mount';
import cors from 'koa-cors';

import {
  ApolloServer
} from 'apollo-server-koa';

import {
  fileLoader,
  mergeTypes,
  mergeResolvers
} from 'merge-graphql-schemas';

import shopifyAuth, {
  verifyRequest
} from '@shopify/koa-shopify-auth';

import initDB from './database';
import rootRouter from './routes/root';
import shopSchema from './models/shop';

const Shop = mongoose.model('Shop', shopSchema);

const {
  SHOPIFY_API_KEY,
  SHOPIFY_SECRET
} = process.env;

// load and merge graphql api
const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql"));
const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolvers.*"));
const typeDefs = mergeTypes(typesArray);
const resolvers = mergeResolvers(resolversArray);

// initiate server
const server = new ApolloServer({ typeDefs, resolvers });
const app = new Koa();

app.keys = [SHOPIFY_SECRET];

server.applyMiddleware({ app });

initDB();

// serve the storefront app static pages on /frontend route
const staticStorefrontPages = new Koa();
// middleware to set content type for the html requested by the storefront
staticStorefrontPages.use(async (ctx, next) => {
  if (ctx.path === '/') {
    ctx.set('Content-Type', 'application/liquid');
  }
  await next();
});
// serve the build directory
staticStorefrontPages.use(serve("/Users/brettbullock/code/shopify-auction-app/client/build"));
// need to set "export PUBLIC_URL=/<sub_path_prefix>/<sub_path>" in frontend folder
// sub path info comes from app proxy settings
app.use(mount("/frontend", staticStorefrontPages));

// Shopify app auth - admin app sits behind
app.use(session({ secure: true, sameSite: 'none' }, app));
app.use(
  shopifyAuth({
    // set access mode, default is 'online'
    accessMode: 'offline',
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_SECRET,
    scopes: ['read_products, write_products'],
    async afterAuth(ctx) {
      const {shop, accessToken} = ctx.session;
      await Shop.create({ shop, accessToken });
      ctx.redirect('/admin');
    }
  })
);
app.use(verifyRequest());

const staticAdminPages = new Koa();
// serve the build directory
staticAdminPages.use(serve("/Users/brettbullock/code/shopify-auction-app/admin/build"));
// need to set "export PUBLIC_URL=/admin" in admin folder
app.use(mount("/admin", staticAdminPages));

app.use(BodyParser());
app.use(Logger());
app.use(cors());
app.use(rootRouter.routes());

app.on('error', err => {
  console.log('server error', err);
});

app.listen(4000, () => console.log(`Server ready at localhost:4000${server.graphqlPath}`));