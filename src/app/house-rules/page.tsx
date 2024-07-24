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

export default async function HouseRules() {
  const startVegan = new Date("2002-10-5");
  const today = new Date();
  return (
    <main className="flex flex-col max-w-lg mx-auto items-center gap-2 mt-3">
      <h2 className="text-xl font-bold">Striving For A Vegan Home</h2>
      <div className="text-center">
        <p>
          To help achieve the above goal I do not keep or allow any 100% meats,
          dairy or egg products in my home and have been mostly vegan since
          {startVegan.toLocaleDateString()} ({dateDiff(startVegan, today)}).
          During that time I went from a raw vegan, to vegan, to vegetarian. My
          present diet composition is specified below.
        </p>
      </div>
      <div className="text-center">
        <h5 className="font-bold">95% vegan</h5>
        <p>I avoid eating products that contain meat, dairy, eggs, and fish.</p>
      </div>
      <div className="text-center">
        <h5 className="font-bold">4.5% vegetarian</h5>
        <p>
          I eat trace amounts of non vegan food that is present in purchased
          prepackaged products and restaurant dishes.
        </p>
      </div>
      <div className="text-center">
        <h5 className="font-bold">0.5% Carnivore</h5>
        <p>
          I will eat a burger, steak, hot dog, turkey, etc infrequently. Often a
          year or more passes between carnivore meals. From a marketing
          perspective I eat carnivore foods to{" "}
          <span className="italic">avoid</span> being viewed as a
          vegan/vegetarian militant.
        </p>
      </div>
    </main>
  );
}
