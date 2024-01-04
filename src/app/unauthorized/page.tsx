import Card from "@/app/card";

export default async function Unauthorized() {
  return (
    <main className="flex flex-col max-w-lg mx-auto items-center gap-2 mt-3">
      <Card title="You are unauthorized.">
        <p>
          Request an authorization by sending carlton.joseph@gmail.com your
          email address and brief description of what you want to access.
        </p>

        <a href="/" className="bg-blue-300 py-1 px-2 rounded">
          Return to main page.
        </a>
      </Card>
    </main>
  );
}
