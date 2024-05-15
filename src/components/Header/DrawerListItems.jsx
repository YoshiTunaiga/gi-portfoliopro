import React from "react";
import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, Info, Group, Reviews, ContactMail } from "@mui/icons-material";
import { TOTAL_SCREENS } from "../../utilities/commonUtils";

const DrawerListItems = ({ switchScreen }) => {
  const drawerIcons = {
    Home: <Home />,
    About: <Info />,
    Clients: <Group />,
    Testimonials: <Reviews />,
    Contact: <ContactMail />,
  };

  return (
    <React.Fragment>
      {TOTAL_SCREENS.map((Screen) => {
        const { screen_name } = Screen ?? {};

        return (
          <ListItemButton
            key={screen_name}
            onClick={() => switchScreen(Screen)}>
            <ListItemIcon>{drawerIcons[screen_name]}</ListItemIcon>
            <ListItemText primary={screen_name} />
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
};

DrawerListItems.propTypes = {
  switchScreen: PropTypes.func,
};

export default DrawerListItems;
