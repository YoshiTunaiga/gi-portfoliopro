import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import "./styles/App.css";
import ScrollService from "./utilities/ScrollService";
import { GET_SCREEN_INDEX } from "./utilities/commonUtils";
import DrawerListItems from "./components/Header/DrawerListItems";

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

const Header = ({ window, component }) => {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /* ===== To update current screen function ===== */
  function updateCurrentScreen(currentScreen) {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  }
  /* ===== subscribe to the observable ====== */
  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const switchScreen = (screen) => {
    let screenComponent = document.getElementById(screen.screenName);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  React.useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Gi Diaz Solutions
      </Typography>
      <Divider />
      <List>
        <DrawerListItems switchScreen={switchScreen} />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="navColor" component="nav">
        <Toolbar style={{ minHeight: "30px" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "#FFF", mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Gi Diaz Solutions
          </Typography>
          <List
            sx={{
              display: { xs: "none", sm: "flex" },
              padding: 0,
              flexWrap: "wrap",
            }}>
            <DrawerListItems switchScreen={switchScreen} />
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
      {component}
      {/* <Box component="main" sx={{ p: 3 }}> */}

      {/* </Box> */}
    </Box>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  component: PropTypes.component,
};

export default Header;