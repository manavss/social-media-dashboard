/* eslint-disable react/prop-types */
function CardOverview({
  iconSm,
  iconUpDown,
  number,
  textClr,
  description,
  percentage,
}) {
  return (
    <div className="flex basis-1/4 cursor-pointer items-end justify-between rounded-md  bg-gray-100 p-5 hover:bg-gray-200 dark:bg-darkBgCard dark:hover:bg-cardHover md:min-h-[120px] md:max-w-[342px] ">
      <div className="space-y-5">
        <h3 className="text-sm font-bold text-gray-500">{description}</h3>
        <h2 className="text-4xl font-bold dark:text-white">{number}</h2>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10">
        <img className="h-6 w-8 pl-2" src={iconSm} alt="" />

        <h5
          className={`flex items-center justify-center gap-x-1 text-sm font-bold text-${textClr}`}
        >
          <img className="h-1" src={iconUpDown} alt="" />
          {percentage}
        </h5>
      </div>
    </div>
  );
}

export default CardOverview;
