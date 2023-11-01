const monthDiff = (d1: Date, d2: Date) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

const yearDiff = (months: number) => {
  return { years: Math.floor(months / 12), months: months % 12 };
};

const dateDiff = (d1: Date, d2: Date) => {
  const monthD = monthDiff(d1, d2);
  const { years, months } = yearDiff(monthD);
  return (
    <span>
      {years} years{months ? ` and ${months} months` : ""}
    </span>
  );
};

export default async function Food() {
  const startVegan = new Date("2002-10-5");
  const today = new Date();
  return (
    <main className="flex flex-col max-w-lg mx-auto items-center gap-2 mt-3">
      <h2 className="text-xl font-bold">Striving For A Vegan Home</h2>
      <p>
        I have been mostly vegan since {startVegan.toLocaleDateString()} (
        {dateDiff(startVegan, today)}). During that time I went from a raw
        vegan, to vegan, to vegetarian. Now about 95% of the food I eat is
        vegan, 4.5% vegetarian and 0.5% meat.
      </p>
      <div>
        <h5 className="font-bold">4.5% vegetarian</h5>
        <p>
          Comes from when I eat out and some prepackaged products that I buy
          that contain some amounts of dairy or eggs.{" "}
          <span className="text-green-500">
            I have a rule of <span className="font-semibold italic">NOT</span>{" "}
            keeping any 100% meats, dairy or egg products at home.
          </span>
        </p>
      </div>
      <div>
        <h5 className="font-bold">0.5% Carnivore</h5>
        <p>
          From a marketing perspective I believe one needs to eat traditional
          carnivore food so that you are not viewed as a vegan/vegeterian
          militant. Once or twice a year I will eat a burger, steak, hot dog,
          turkey, etc. Often I go years between carnivore meals.
        </p>
      </div>
    </main>
  );
}
