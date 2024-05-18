import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  // Typography,
  Drawer,
  IconButton,
  List,
} from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { GET_SCREEN_INDEX } from "../../utilities/commonUtils";
import ScrollService from "../../utilities/ScrollService";
import DrawerListItems from "./DrawerListItems";

const drawerWidth = 200;

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const StyledPermanentDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    color: "primary.main",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

const Header = () => {
  // const drawerWidth = window.innerWidth / 2;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
    <>
      <StyledAppBar position="fixed" open={isDrawerOpen}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              color: "white",
              marginRight: "36px",
              ...(isDrawerOpen && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
          {/* <Typography
            color="white"
            noWrap
            sx={{
              flexGrow: 1,
              fontSize: 26,
              lineHeight: "100%",
            }}>
            Gi Diaz Solutions
          </Typography> */}
        </Toolbar>
      </StyledAppBar>
      <StyledPermanentDrawer
        variant={isDrawerOpen ? "permanent" : "temporary"}
        open={isDrawerOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft sx={{ color: "primary.main" }} />
          </IconButton>
        </Toolbar>
        <List component="nav">
          <DrawerListItems switchScreen={switchScreen} />
        </List>
      </StyledPermanentDrawer>
    </>
  );
};

Header.propTypes = {};

export default Header;
