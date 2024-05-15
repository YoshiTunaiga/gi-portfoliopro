import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
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
    color: "#C7A03B",
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
    let screenComponent = document.getElementById(screen.screen_name);
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
          <Typography
            component="h1"
            variant="h4"
            color="white"
            noWrap
            sx={{ flexGrow: 1 }}>
            Gi Diaz Solutions
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledPermanentDrawer
        variant="permanent"
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
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <List component="nav">
          <DrawerListItems switchScreen={switchScreen} />
          {/* {getDrawerOptions()} */}
          {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
        </List>
      </StyledPermanentDrawer>
      {/* <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
        }}>
        <Container style={{ minWidth: "100%" }}>
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxHeight: 40,
              borderColor: "divider",
            }}>
            <StyledHeaderBox>
              <h2>Gi Diaz Solutions</h2>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {getHeaderOptions()}
              </Box>
            </StyledHeaderBox>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}>
                <MenuIcon />
              </Button>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(!isDrawerOpen)}
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                  },
                }}>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}>
                  {getDrawerOptions()}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar> */}
    </>
  );
};

Header.propTypes = {};

export default Header;
