export default async function Card({
  children,
  dish = "Dish",
  cookMinutes = 15,
}: {
  children: React.ReactNode;
  dish?: string;
  cookMinutes?: number;
}) {
  return (
    <div className="flex flex-col items-center bg-slate-50 px-4 py-2 rounded-lg shadow-lg min-w-[300px]">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-lg font-semibold mt-2 mb-1">{dish}</h3>
        <a className="text-md text-gray-400">{cookMinutes} minutes</a>
      </div>
      {children}
    </div>
  );
}
