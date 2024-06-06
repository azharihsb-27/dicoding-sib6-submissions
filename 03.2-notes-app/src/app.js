import "./style/styles.css";

import "./script/components/index.js";
import home from "./script/view/home.js";

import { animate } from "motion";

document.addEventListener("DOMContentLoaded", () => {
  home();
  animate(
    "#loader",
    { rotate: 180 },
    {
      duration: 1,
      easing: "ease-in-out",
      repeat: Infinity,
      direction: "alternate",
    },
  );
});
