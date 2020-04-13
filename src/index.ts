import { PrismaClient } from "@prisma/client";
import { GraphQLServer } from "graphql-yoga";
import { schema } from "./utils";

const prisma = new PrismaClient();

// 3 - Server works with the type definitions and resolvers
const server = new GraphQLServer({
  schema,
  context: () => {
    return {
      prisma
    };
  }
});

// tslint:disable-next-line:no-console
server.start(() => console.log(`Server is running on http://localhost:4000`));
