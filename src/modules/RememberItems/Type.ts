import { objectType } from "@nexus/schema";
import { UserObjType } from "../User/Type";

export const RememberItemCategoryObjType = objectType({
  name: "RememberItemCategory",
  definition(t) {
    t.int("id");
    t.field("user", {
      type: UserObjType
    });
    t.int("userId");
    t.string("category");
  }
});

export const RememberItemsObjType = objectType({
  name: "RememberItems",
  definition(t) {
    t.int("id");
    t.string("createdAt");
    t.field("user", {
      type: UserObjType
    });
    t.int("userId");
    t.string("item");
    t.field("category", {
      type: RememberItemCategoryObjType
    });
    t.int("categoryId");
  }
});

// model RememberItemCategory {
//   id            Int             @default(autoincrement()) @id
//   user          User            @relation(fields: [userId], references: [id])
//   userId        Int             @unique
//   category      String
//   RememberItems RememberItems[]
// }

// model RememberItems {
//   id         Int                  @default(autoincrement()) @id
//   createdAt  DateTime             @default(now())
//   userId     Int                  @unique
//   user       User                 @relation(fields: [userId], references: [id])
//   item       String
//   category   RememberItemCategory @relation(fields: [categoryId], references: [id])
//   categoryId Int
// }
