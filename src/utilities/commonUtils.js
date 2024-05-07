import AboutMePage from "../pages/AboutMe/AboutMePage";
import ClientsPage from "../pages/Clients/ClientsPage";
import ContactMePage from "../pages/ContactMe/ContactMePage";
import HomePage from "../pages/HomePage/HomePage";
// import ResumePage from "../pages/Resume/ResumePage";

// Component Rendering: Screens for SPA
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: HomePage,
  },
  {
    screen_name: "About",
    component: AboutMePage,
  },
  {
    screen_name: "Clients",
    component: ClientsPage,
  },
  // {
  //   screen_name: "Resume",
  //   component: ResumePage,
  // },
  {
    screen_name: "Contact",
    component: ContactMePage,
  },
];

// titration to get the available screens index
export const GET_SCREEN_INDEX = (screen_name) => {
  // console.log(screen_name);
  // If the screen name doesn't exist, return -1 (not such screen on the array)
  if (!screen_name) return -1;

  // Loop thru the array of screens
  for (let idx = 0; idx < TOTAL_SCREENS.length; idx++) {
    // if the screen does exist, return the screen
    if (TOTAL_SCREENS[idx].screen_name === screen_name) return idx;
  }

  return -1; // else return -1.
};
