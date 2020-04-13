// Imports from modules to create graphql schema definitions

import { makeSchema } from "@nexus/schema";
import { nexusPrismaPlugin } from "nexus-prisma";
import { typedefs } from "../../modules";

export const schema = makeSchema({
  types: [typedefs],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + "../../../db/generated/schema.graphql",
    typegen: __dirname + "../../../db/generated/nexus.ts"
  },
  typegenAutoConfig: {
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma"
      },
      // To import dtypes declare it like below
      {
        source: require.resolve("../../@types/index.d"),
        alias: "Context"
      }
    ],
    contextType: "Context.Context"
  }
});
