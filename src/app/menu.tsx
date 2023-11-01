import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const ButtonSytled = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href}>
      <button className="bg-green-200 py-1 px-2 rounded-md">{children}</button>
    </a>
  );
};

export default async function Menu() {
  const session = await getServerSession();

  return (
    <div className="py-3 bg-slate-400 flex justify-between items-center px-2">
      <Link href="/">
        <Image src="/logo.svg" alt="paw logo" width="40" height="40" />
      </Link>
      <Link href="/">
        <h1 className="text-2xl font-bold">Carlton At Home</h1>
      </Link>
      {session?.user?.name ? (
        <div className="flex gap-1 items-center">
          {session?.user?.name}
          <ButtonSytled href="/api/auth/signout">Sign Out</ButtonSytled>
        </div>
      ) : (
        <ButtonSytled href="/api/auth/signin">Sign In</ButtonSytled>
      )}
    </div>
  );
}
