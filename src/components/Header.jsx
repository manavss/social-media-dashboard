/* eslint-disable react/prop-types */
function Header({ theme, handleThemeSwitch }) {
  // console.log(theme);
  return (
    <div className="flex w-full flex-col justify-start gap-y-5 md:flex-row md:justify-between ">
      <div className=" ">
        <h1 className="text-2xl font-bold dark:text-white">
          Social Media Dashboard
        </h1>
        <h3 className="text-normal font-bold text-gray-500 dark:text-textColor">
          Total followers: 23,004
        </h3>
      </div>
      <hr className="h-[2px] bg-black md:hidden" />
      <div className="flex justify-between md:items-center md:gap-x-2">
        <span className=" text-sm font-medium text-gray-900 dark:text-textColor md:ml-3">
          Dark mode
        </span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value={theme}
            onClick={handleThemeSwitch}
            className="peer sr-only"
          />
          <div className="peer h-6 w-11 rounded-full  bg-gray-500 from-cyan-500 to-blue-500 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gradient-to-r peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-red-600 dark:bg-gray-500"></div>
        </label>
      </div>
    </div>
  );
}

export default Header;
