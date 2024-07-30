"use server";
import { db } from "@/db";

export async function getUserFromDb(email: string, password: string) {
  console.log({ email, password });
  try {
    const existingUser = await db
      .selectFrom("user")
      .select(["email", "password"])
      .where("email", "=", email)
      .executeTakeFirst();
    console.log({ existingUser });
    if (!existingUser) return { success: false, message: "User not found." };
    if (existingUser.password !== password)
      return { success: false, message: "Password incorrect" };

    return { success: true, data: existingUser };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
export async function signUp(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { error: "Need email and password" };
  }

  try {
    await db
      .insertInto("user")
      .values({ email, password })
      .returning(["id"])
      .executeTakeFirst();
  } catch (err: any) {
    console.log({ err }, err.detail);
    return { errors: { general: err.detail as string } };
  }

  return { errors: null };
}
