import * as path from 'path';
import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
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

import initDB from './database';

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

// const staticStorefrontPages = new Koa();
// staticStorefrontPages.use(serve("/Users/brettbullock/code/shopify-auction-app/client/build")); // serve the build directory
// // need to set "export PUBLIC_URL=/frontend" in frontend folder
// app.use(mount("/frontend", staticStorefrontPages));

app.use(BodyParser());
app.use(Logger());
app.use(cors());

// routes
router.get('/frontend', async ctx => {
  console.log(ctx.request);
});

app.use(router.routes()).use(router.allowedMethods());

app.on('error', err => {
  console.log('server error', err);
});

app.listen(4000, () => console.log(`Server ready at localhost:4000${server.graphqlPath}`));