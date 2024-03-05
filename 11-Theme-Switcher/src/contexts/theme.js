import { createContext, useContext } from "react";

// So we can also provide the initial values to our context like when for the first time context is created then which values will be fed to our context.

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
