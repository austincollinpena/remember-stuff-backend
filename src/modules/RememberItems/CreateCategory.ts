import { extendType, stringArg } from "@nexus/schema";

export const CreateCategory = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addCategory", {
      type: "RememberItemCategory",
      args: {
        category: stringArg({ required: true })
      },
      resolve: async (parent, args, context, info) => {
        const category = await context.prisma.rememberItemCategory.create({
          data: {
            category: args.category,
            user: context.user
          }
        });
        return category;
      }
    });
  }
});

