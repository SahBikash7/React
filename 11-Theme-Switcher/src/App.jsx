import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeButton";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // We have made lightTheme method in out ThemeContext but it doesn't do anything.

  // We can define lightTheme(method having same name) here which causes the functionality of the lightTheme method of ThemeContext which previously didn't do anything to be defined as we define it here :

  const lightTheme = () => {
    setThemeMode("light");
  };

  // And same follows for the darkTheme as well :

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Actual Change in Theme:
  useEffect(() => {
    const theme = document.querySelector("html").classList;
    theme.remove("light", "dark");
    theme.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
