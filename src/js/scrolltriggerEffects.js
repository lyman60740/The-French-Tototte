import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".header-content__title");
  ScrollTrigger.normalizeScroll(true);
  gsap.to(title, {
    scrollTrigger: {
      trigger: title,
      pin: true,
      start: "top top",
      endTrigger: "body",
      end: "bottom bottom",
    },
  });

  const elementsToFade = document.querySelectorAll(
    ".header-content img, .header-content p, .header-content span"
  );

  // Appliquer un ScrollTrigger à chaque élément
  elementsToFade.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top top+=10%", // Déclenche l'animation lorsque le haut de l'élément atteint 10% du haut de la fenêtre
        end: "center top", // Vous pouvez ajuster ceci en fonction de la durée de l'effet que vous désirez
        toggleActions: "play none none reverse",
        scrub: true,
      },
      autoAlpha: 0, // Définit l'opacité finale pour le ScrollTrigger
      duration: 0.5, // Durée de l'animation
      ease: "none", // Type d'animation
    });
  });
});
