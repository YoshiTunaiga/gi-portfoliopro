import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import darkMode from "./utilities/darkMode.js";
import lazyLoading from "./utilities/lazyLoading.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

darkMode();
lazyLoading();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
