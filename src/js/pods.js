import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".pods__box__list__item");

  items.forEach((item) => {
    let popup = item.querySelector(".pods__box__list__item__popup");
    let imgPopup = item.querySelector("img");
    let shadowPopup = item.querySelector(".shadow");

    let tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.4, ease: "power1.out" },
    });

    tl.from(popup, { autoAlpha: 0, scale: 0 });
    tl.from(imgPopup, { yPercent: 12 }, "<");
    tl.from(shadowPopup, { scale: 0.5, yPercent: 12, autoAlpha: 0 }, "<");

    item.addEventListener("mouseenter", () => {
      tl.play();
    });
    item.addEventListener("mouseleave", () => {
      tl.reverse();
    });
  });
});
