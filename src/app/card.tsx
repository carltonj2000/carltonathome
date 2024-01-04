export default async function Card({
  children,
  title = "Title",
  subTitle = null,
}: {
  children: React.ReactNode;
  title?: string;
  subTitle?: string | null;
}) {
  return (
    <div className="flex flex-col items-center bg-slate-50 px-4 py-2 rounded-lg shadow-lg min-w-[300px]">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-lg font-semibold mt-2 mb-1">{title}</h3>
        {subTitle && <a className="text-md text-gray-400">{subTitle}</a>}
      </div>
      {children}
    </div>
  );
}
