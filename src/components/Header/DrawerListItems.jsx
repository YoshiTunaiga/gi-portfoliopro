import React from "react";
import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Home,
  Info,
  Group,
  Reviews,
  ContactMail,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { TOTAL_SCREENS } from "../../utilities/commonUtils";
import { Link } from "@mui/material";

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
        const { screenName } = Screen ?? {};

        return (
          <ListItemButton key={screenName} onClick={() => switchScreen(Screen)}>
            <ListItemIcon>{drawerIcons[screenName]}</ListItemIcon>
            <ListItemText primary={screenName} />
          </ListItemButton>
        );
      })}
      <ListItemButton key={"LinkedIn"} onClick={() => switchScreen(Screen)}>
        <Link
          href="https://www.linkedin.com/in/gisseldiazf/"
          underline="none"
          target="_blank"
          color="white"
          sx={{ display: "flex" }}>
          <ListItemIcon>
            <LinkedIn />
          </ListItemIcon>
          <ListItemText primary={"LinkedIn"} />
        </Link>
      </ListItemButton>
      <ListItemButton key={"GitHub"} onClick={() => switchScreen(Screen)}>
        <Link
          href="https://www.linkedin.com/in/gisseldiazf/"
          underline="none"
          target="_blank"
          color="white"
          sx={{ display: "flex" }}>
          <ListItemIcon>
            <GitHub />
          </ListItemIcon>
          <ListItemText primary={"GitHub"} />
        </Link>
      </ListItemButton>
    </React.Fragment>
  );
};

DrawerListItems.propTypes = {
  switchScreen: PropTypes.func,
};

export default DrawerListItems;
