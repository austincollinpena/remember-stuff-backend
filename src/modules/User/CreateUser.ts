import { extendType, stringArg } from "@nexus/schema";

export const CreateUser = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        email: stringArg({ required: true }),
        password: stringArg({ required: true })
      },
      resolve: async (parent, args, context, info) => {
        const user = await context.prisma.user.create({
          data: {
            email: args.email,
            password: args.password
          }
        });
        return user;
      }
    });
  }
});

// model User {
//   createdAt DateTime @default(now())
//   email     String   @unique
//   id        Int      @default(autoincrement()) @id
//   password  String
//   // Here is the foreign key to the Link field
//   links     Link[]
// }
