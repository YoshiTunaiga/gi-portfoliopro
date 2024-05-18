import AboutMePage from "../pages/AboutMe/AboutMePage";
import ClientsPage from "../pages/Clients/ClientsPage";
import ContactMePage from "../pages/ContactMe/ContactMePage";
import HomePage from "../pages/HomePage/HomePage";
// import ResumePage from "../pages/Resume/ResumePage";
import TestimonialsPage from "../pages/TestimonialsPage/TestimonialsPage";

// Component Rendering: Screens for SPA
export const TOTAL_SCREENS = [
  {
    screenName: "Home",
    component: HomePage,
  },
  {
    screenName: "About",
    component: AboutMePage,
  },
  {
    screenName: "Clients",
    component: ClientsPage,
  },
  {
    screenName: "Testimonials",
    component: TestimonialsPage,
  },
  // {
  //   screenName: "Resume",
  //   component: ResumePage,
  //
  // },
  {
    screenName: "Contact",
    component: ContactMePage,
  },
];

// titration to get the available screens index
export const GET_SCREEN_INDEX = (screenName) => {
  // If the screen name doesn't exist, return -1 (not such screen on the array)
  if (!screenName) return -1;

  // Loop thru the array of screens
  for (let idx = 0; idx < TOTAL_SCREENS.length; idx++) {
    // if the screen does exist, return the screen
    if (TOTAL_SCREENS[idx].screenName === screenName) return idx;
  }

  return -1; // else return -1.
};
