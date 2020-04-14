import { extendType } from "@nexus/schema";

export const CreateMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createProfile", {
      type: "Profile",
      args: {},
      resolve: (parent, args, context, info) => {
        return;
      }
    });
  }
});
