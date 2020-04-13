"use strict";
// https://www.howtographql.com/graphql-js/4-adding-a-database/
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const client_1 = require("@prisma/client");
require("prisma-client-lib");
const prisma = new client_1.PrismaClient();
const context_1 = require("./context");
// Define the graqhql scheme
const links = [{
        id: 'link-1',
        url: 'www.howtographql.com',
        description: 'fullstack tutorial for graphql'
    }];
const idCount = links.length;
const resolvers = {
    // Resolvers are named after the type definition
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: (root, args, context, info) => {
            return context.prisma.links;
        }
    },
    // Context object allows resolvers to communicate
    Mutation: {
        post: (parent, args, context) => {
            // New link variable is equal to the args
            // tslint:disable-next-line:no-console
            console.dir(context);
            // tslint:disable-next-line:no-console
            console.dir(context.url);
            return context.prisma.link.create({
                data: {
                    url: args.url,
                    description: args.description
                }
            });
        }
    }
};
// 3 - Server works with the type definitions and resolvers
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './src/schema/schema.graphql',
    resolvers,
    context: context_1.createContext
});
// tslint:disable-next-line:no-console
server.start(() => console.log(`Server is running on http://localhost:4000`));
//# sourceMappingURL=index.js.map