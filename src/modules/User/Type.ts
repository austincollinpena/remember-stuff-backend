import { objectType } from "@nexus/schema";
import { LinkObjType } from "../Link";

// https://nexus.js.org/ => library
// Prisma Bindings for Nexus => https://www.nexusjs.org/#/components/schema/plugins/prisma
// Dropping Support - https://github.com/graphql-nexus/schema/issues/373

export const UserObjType = objectType({
  name: "User",
  definition(t) {
    t.string("createdAt");
    t.string("email");
    t.int("id", { description: "Id of the user" });
    t.string("password");
    t.list.field("links", {
      type: LinkObjType
    });
  }
});
