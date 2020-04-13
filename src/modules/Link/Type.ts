import { objectType } from "@nexus/schema";
import { UserObjType } from "../User/Type";

// https://nexus.js.org/ => library
// Prisma Bindings for Nexus => https://www.nexusjs.org/#/components/schema/plugins/prisma
// Dropping Support - https://github.com/graphql-nexus/schema/issues/373

export const LinkObjType = objectType({
  name: "Link",
  definition(t) {
    t.string("createdAt");
    t.string("description");
    t.int("id", { description: "Id of the user" });
    t.string("url");
    t.int("authorId");
    t.field("author", {
      type: UserObjType
    });
  }
});
