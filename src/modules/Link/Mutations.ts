import { extendType, stringArg } from "@nexus/schema";

// Extend Type https://nexus.js.org/docs/api-extendtype
export const LinkMutations = extendType({
  // Extend this object type
  type: "Mutation",
  definition(t) {
    // Name of the mutation
    t.field("addLink", {
      // Return object type
      type: "Link",
      // Define the arguments accepted
      args: {
        url: stringArg({ required: true }),
        description: stringArg({ required: true })
      },
      // Create the object, or modify and create
      resolve: async (parent, args, context, info) => {
        const link = await context.prisma.link.create({
          data: {
            description: args.description,
            url: args.url
          }
        });
        return link;
      }
    });
  }
});
