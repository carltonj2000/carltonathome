import { createKysely } from "@vercel/postgres-kysely";
import { Database } from "@/db/schemas";
import { config } from "dotenv";
config({ path: ".env.local" });

const db = createKysely<Database>();

async function main() {
  await db
    .insertInto("user")
    .values({ email: "carlton.joseph@gmail.com", password: "password" })
    .execute();

  const user = await db.selectFrom("user").execute();

  return user;
}

console.log("Insert Started ...");
main()
  .catch((e) => console.error(e))
  .finally(() => console.log("Insert completed!"));
