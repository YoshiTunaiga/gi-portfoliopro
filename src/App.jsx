import { TOTAL_SCREENS } from "./utilities/commonUtils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { useState } from "react";
import getLPTheme from "./getLPTheme";
import Header from "./components/Header/Header";
import { Box } from "@mui/material";

export default function App() {
  const [mode, setMode] = useState("light");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : null
    );
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Header mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ bgcolor: "background.default" }}>{mapAllScreens()}</Box>
    </ThemeProvider>
  );
}
