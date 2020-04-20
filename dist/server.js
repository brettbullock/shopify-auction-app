"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const apollo_server_koa_1 = require("apollo-server-koa");
// import {
//   fileLoader,
//   mergeTypes,
//   mergeResolvers
// } from 'merge-graphql-schemas';
// import schema from './graphql/schema';
const database_1 = __importDefault(require("./database"));
// const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql"));
// const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolvers.*"));
// const typeDefs = mergeTypes(typesArray);
// const resolvers = mergeResolvers(resolversArray);
// const server = new ApolloServer({ typeDefs, resolvers})
const auction_1 = __importDefault(require("./api/auction"));
const server = new apollo_server_koa_1.ApolloServer({ typeDefs: auction_1.default });
const app = new koa_1.default();
server.applyMiddleware({ app });
database_1.default();
app.listen(4000, () => console.log(`Server ready at localhost:4000${server.graphqlPath}`));
// app.use(mount('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// })))
app.use((ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = 'Hello world!';
}));
app.on('error', err => {
    console.log('server error', err);
});
//# sourceMappingURL=server.js.map