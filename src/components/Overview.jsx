import CardOverview from "./CardOverview";
import dataOverview from "./dataOverview";
function Overview() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-500 dark:text-white">
        Overview-Today
      </h1>
      <div className="my-10 flex flex-col flex-wrap gap-x-10 gap-y-6 md:flex-row">
        {dataOverview.map((p, i) => {
          return (
            <CardOverview
              key={i}
              description={p.description}
              number={p.number}
              iconUpDown={p.iconUpDown}
              iconSm={p.iconSm}
              textClr={p.textClr}
              percentage={p.percentage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Overview;
