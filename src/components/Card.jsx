/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Card({
  iconSm,
  iconUpDown,
  number,
  textClr,
  followers,
  un,
  fors,
  border,
}) {
  return (
    <div
      className={` flex basis-1/4 flex-col  items-center justify-center space-y-4 rounded-md border-t-4  dark:bg-darkBgCard dark:hover:bg-cardHover border-${border} cursor-pointer bg-gray-100 py-5 hover:bg-gray-200 md:min-h-[200px] md:max-w-[400px]`}
    >
      <div className=" flex gap-x-2">
        <img className=" h-5" src={iconSm} alt="" />
        <h5 className=" text-sm font-bold text-gray-500 ">{un}</h5>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold dark:text-white">{followers}</h1>
        <h4 className="text-sm uppercase tracking-[0.25em] text-gray-500">
          {fors}
        </h4>
      </div>
      <div className="flex  items-center gap-x-1">
        <img className="h-1" src={iconUpDown} alt="" />
        <h4 className={`text-sm font-bold text-${textClr}`}>{number} Today</h4>
      </div>
    </div>
  );
}

export default Card;
