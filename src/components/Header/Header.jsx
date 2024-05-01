/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Container,
  Divider,
  Typography,
  MenuItem,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../utilities/commonUtils";
import ScrollService from "../../utilities/ScrollService";

const Header = () => {
  const drawerWidth = window.innerWidth / 2;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setIsDrawerOpen(newOpen);
  };

  // /* ===== SCREEN STATE ===== */
  const [selectedScreenIdx, setSelectedScreenIdx] = useState(0);

  /* ===== To update current screen function ===== */
  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  /* ===== subscribe to the observable ====== */
  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreenIdx(index);
    setIsDrawerOpen(false);
  };

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, idx) => (
      <MenuItem
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(idx)}
        onClick={() => switchScreen(idx, Screen)}
        sx={{ py: "6px", px: "12px" }}>
        <Typography
          variant="body2"
          style={{
            fontFamily: "Lato",
            fontSize: "24px",
            color: "#FFFFFF",
          }}>
          {Screen.screen_name}
        </Typography>
      </MenuItem>
    ));
  };

  const getDrawerOptions = () => {
    return TOTAL_SCREENS.map((Screen, idx) => (
      <MenuItem
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(idx)}
        onClick={() => switchScreen(idx, Screen)}>
        <Typography
          style={{
            fontFamily: "Lato",
            fontSize: "24px",
            fontWeight: 700,
            color: "#000000",
          }}>
          {Screen.screen_name}
        </Typography>
      </MenuItem>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (selectedScreenIdx === index) classes += "selected-header-option ";

    return classes;
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
        }}>
        <Container style={{ minWidth: "100%" }}>
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxHeight: 40,
              borderColor: "divider",
            })}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "Lato",
                fontSize: "24px",
                color: "#FFFFFF",
              }}>
              <h2>Gi Diaz Solutions</h2>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {getHeaderOptions()}
              </Box>
            </Box>
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
                    // minWidth: "60dvw",
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
      </AppBar>
    </div>
  );
};

Header.propTypes = {};

export default Header;
