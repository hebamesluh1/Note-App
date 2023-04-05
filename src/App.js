import { useState, useEffect } from "react";

import { darkTheme, lightTheme } from "./global/theme";
import { ThemeProvider } from "styled-components";
import { themeContext } from "./context/themeContext";
import { NotesProvider } from "./context/NotesContext";


import Home from "./pages/Home";


function App() {
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    localStorage.getItem("theme") === darkTheme.theme
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <NotesProvider>
        <Home />;
        </NotesProvider>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
