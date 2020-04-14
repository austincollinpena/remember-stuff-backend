import { objectType } from "@nexus/schema";
import { UserObjType } from "../User/Type";

export const ProfileObjType = objectType({
  name: "Profile",
  definition(t) {
    t.int("id");
    t.field("user", {
      type: UserObjType
    });
    t.int("userId");
  }
});
