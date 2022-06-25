import { newEnforcer } from "casbin";
import { join } from "path";
async function init() {
  const e = await newEnforcer(
    join(__dirname, "./rbac.conf"),
    join(__dirname, "./rbac.csv")
  );
  const result = await e.enforce(
    { id: "1234", role: "editor" },
    { user_id: "1234", type: "article" },
    "delete"
  );
  console.log(result);
}
init();
