import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import Overview from "./components/Overview";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className=" px-8 py-10 dark:bg-darkBg  md:px-24 ">
      <Header
        setTheme={setTheme}
        theme={theme}
        handleThemeSwitch={handleThemeSwitch}
      />
      <SocialMedia />
      <Overview />
    </div>
  );
}

export default App;
