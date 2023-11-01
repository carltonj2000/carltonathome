import Link from "next/link";

const LinkStyled = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="bg-red-400 py-1 px-2 rounded-md">
      {children}
    </Link>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col max-w-lg mx-auto items-center gap-2 mt-3">
      <LinkStyled href="food">Food</LinkStyled>
      <LinkStyled href="houserules">House Rules</LinkStyled>
      <LinkStyled href="admin">Administration</LinkStyled>
    </main>
  );
}
