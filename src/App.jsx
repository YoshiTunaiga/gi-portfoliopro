import { TOTAL_SCREENS } from "./utilities/commonUtils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import getLPTheme from "./getLPTheme";
import { useTheme } from "@mui/material/styles";
import Header from "./components/Header/Header";
import { Box, Toolbar, Zoom } from "@mui/material";
import { NavigationSharp } from "@mui/icons-material";
import ScrollService from "./utilities/ScrollService";
import { StyledAppBox } from "./AppStyles";
import "./App.css";
import "./index.css";

export default function App() {
  const [mode, setMode] = useState("light");
  const LPtheme = createTheme(getLPTheme(mode));
  const theme = useTheme();

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screenName}
          key={screen.screenName}
          id={screen.screenName}
        />
      ) : null
    );
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const handleScrollButton = () => ScrollService.scrollHandler.scrollToHome();

  return (
    <ThemeProvider theme={LPtheme}>
      <Box sx={{ display: "flex", bgcolor: "#100842" }}>
        <CssBaseline />
        <Header mode={mode} toggleColorMode={toggleColorMode} />
        <Box
          component="main"
          sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
          <Toolbar />
          <StyledAppBox>{mapAllScreens()}</StyledAppBox>
          <Zoom
            in={true}
            timeout={transitionDuration}
            unmountOnExit
            style={{ transitionDelay: "3000ms" }}>
            <div className="float-button" onClick={handleScrollButton}>
              <NavigationSharp className="icon-float" color="secondary.light" />
            </div>
          </Zoom>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
