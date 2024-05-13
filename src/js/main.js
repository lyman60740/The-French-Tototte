import "./hoverEffects.js";
import "./scrolltriggerEffects.js";
import "./pods.js";
import "./custom.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", function () {
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  });

  if (window.innerWidth < 1200) {
    document.querySelectorAll(".navBar, #smooth-wrapper").forEach((el) => {
      gsap.set(el, { autoAlpha: 0 });
    });
    gsap.set(".avertissementResponsive", { autoAlpha: 1 });
  }
});
