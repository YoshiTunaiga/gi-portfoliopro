export default class Animations {
  /* SINGLETON CLASS INSTANCE */
  static animations = new Animations(); // instantiating an animation class.

  // Function to take the screen Id
  fadeInScreen = (screenName) => {
    let screen = document.getElementById(screenName); // Get the element by its ID.

    if (!screenName || !screen) return; // if the screen doesnt exist, return;

    // if screen does exist, lets give it a style to transform
    screen.style.opacity = "5";
    screen.style.transform = "translateY(1px)";
  };
}
