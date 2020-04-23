import 'isomorphic-fetch';
import 'dotenv/config';

import * as path from 'path';
import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import session from 'koa-session';
import Router  from 'koa-router';
import Logger from 'koa-logger';
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

const {SHOPIFY_API_KEY, SHOPIFY_SECRET} = process.env;

// load and merge graphql api
const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql"));
const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolvers.*"));
const typeDefs = mergeTypes(typesArray);
const resolvers = mergeResolvers(resolversArray);

// initiate server
const server = new ApolloServer({ typeDefs, resolvers });
const app = new Koa();
const router = new Router;

server.applyMiddleware({ app });

initDB();

// serve the storefront static pages on /frontend route
const staticStorefrontPages = new Koa();
staticStorefrontPages.use(serve("/Users/brettbullock/code/shopify-auction-app/client/build")); // serve the build directory
// need to set "export PUBLIC_URL=/frontend" in frontend folder
app.use(mount("/frontend", staticStorefrontPages));

app.keys = [SHOPIFY_SECRET];

app.use(session({ secure: true, sameSite: 'none' }, app));
app.use(
  shopifyAuth({
    // your shopify app api key
    apiKey: SHOPIFY_API_KEY,
    // your shopify app secret
    secret: SHOPIFY_SECRET,
    // scopes to request on the merchants store
    scopes: ['read_products, write_products'],
    // set access mode, default is 'online'
    accessMode: 'offline',
    // callback for when auth is completed
    afterAuth(ctx) {
      const {shop, accessToken} = ctx.session;
      console.log('We did it!', accessToken);

      ctx.redirect('/admin');
    },
  }),
);

app.use(verifyRequest());

const staticAdminPages = new Koa();
staticAdminPages.use(serve("/Users/brettbullock/code/shopify-auction-app/admin/build")); // serve the build directory
// need to set "export PUBLIC_URL=/frontend" in frontend folder
app.use(mount("/admin", staticAdminPages));

app.use(BodyParser());
app.use(Logger());
app.use(cors());

// routes
router.get('/frontend', async ctx => {
  console.log(ctx.request);
});

router.get('/admin', async ctx => {
  console.log(ctx.request);
});

app.use(router.routes()).use(router.allowedMethods());

app.on('error', err => {
  console.log('server error', err);
});

app.listen(4000, () => console.log(`Server ready at localhost:4000${server.graphqlPath}`));