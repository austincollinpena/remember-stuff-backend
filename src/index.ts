import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import "dotenv/config";
import express from "express";
import { schema } from "./utils";

const prisma = new PrismaClient();

// Initialize server
const app = express();

const server = new ApolloServer({
  // Why this not working?
  schema,

  context: () => {
    return {
      prisma
    };
  }
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log("server ready at http://localhost:4000");
});
