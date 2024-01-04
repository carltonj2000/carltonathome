import Card from "../card";
export default async function Food() {
  return (
    <main className="flex flex-col max-w-lg mx-auto items-center gap-2 mt-3">
      <h2 className="text-xl font-semibold">Ninja Dual Heat Air Fryer</h2>
      <Card title="Pizza">
        <p>Some instructions.</p>
      </Card>
      <h2 className="text-xl font-bold">Stove</h2>
      <Card>
        <p>TBD</p>
      </Card>
      <h2 className="text-xl font-bold">Oven</h2>
      <Card>
        <p>TBD</p>
      </Card>
    </main>
  );
}
