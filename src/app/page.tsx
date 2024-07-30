import { SignIn } from "@/components/sign-in";
import { auth } from "@/auth";
import { SignOut } from "@/components/sign-out";
import { SignUp } from "@/components/sign-up";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex flex-col items-center mt-4 gap-2">
      <SignUp />
      <SignIn />
      <SignOut />
      <p>{JSON.stringify(session, null, 2)}</p>
    </main>
  );
}
