import { extendType, stringArg } from "@nexus/schema";

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

export const LinkMutationsExtended = extendType({
  // Extend this object type
  type: "Mutation",
  definition(t) {
    // Name of the mutation
    t.field("addLinkModified", {
      // Return object type
      type: "Link",
      // Define the arguments accepted
      args: {
        url: stringArg({ required: true }),
        description: stringArg({ required: true })
      },
      // Create the object, or modify and create
      resolve: async (parent, args, context, info) => {
        let regexChecker = args.description;
        regexChecker = "other string";
        // regexChecker.regexMagix
        if (true) {
          const link = await context.prisma.link.create({
            data: {
              description: regexChecker,
              url: args.url
            }
          });
          return link;
        } else {
          return "Bad";
        }
      }
    });
  }
});
