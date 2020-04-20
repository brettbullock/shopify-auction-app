import * as path from 'path';
import Koa from 'koa';

import {
  ApolloServer
} from 'apollo-server-koa';

import {
  fileLoader,
  mergeTypes,
  mergeResolvers
} from 'merge-graphql-schemas';

import initDB from './database';

const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql"));
const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolvers.*"));

const typeDefs = mergeTypes(typesArray);
const resolvers = mergeResolvers(resolversArray);

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();

server.applyMiddleware({ app });

initDB();

app.listen(4000, () => console.log(`Server ready at localhost:4000${server.graphqlPath}`));

app.use(async ctx => {
  ctx.body = 'Hello world!';
});

app.on('error', err => {
  console.log('server error', err);
});