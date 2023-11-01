import { getServerSession } from "next-auth";

export default async function Karoke() {
  const session = await getServerSession();

  return (
    <main className="flex flex-col max-w-lg mx-auto items-center gap-2 mt-3">
      {session?.user?.name ? (
        <div>
          {session?.user?.name} the Administration section of the site is still
          being built.
        </div>
      ) : (
        <div>Please SignIn to view admin data.</div>
      )}
    </main>
  );
}
