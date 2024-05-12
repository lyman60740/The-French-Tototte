import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

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

  // Tototte rotation

  const tototte = document.querySelector(".charge__box__second img");

  gsap.to(tototte, {
    scrollTrigger: {
      trigger: tototte,
      start: "center bottom", // Déclenche l'animation lorsque le haut de l'élément atteint 10% du haut de la fenêtre
      end: "center center", // Vous pouvez ajuster ceci en fonction de la durée de l'effet que vous désirez
      toggleActions: "play none none reverse",
      scrub: true,
      markers: false,
    },
    rotate: "20deg",
    ease: "none",
  });

  // Medaille mynthos

  const medaille = document.querySelector(".mynthos__box__medaille");
  const reflet = document.querySelector(".mynthos__box__medaille__reflets");

  gsap.from(medaille, {
    scrollTrigger: {
      trigger: medaille,
      start: "center bottom", // Déclenche l'animation lorsque le haut de l'élément atteint 10% du haut de la fenêtre
      end: "center center", // Vous pouvez ajuster ceci en fonction de la durée de l'effet que vous désirez
      toggleActions: "play none none reverse",
      markers: true,
    },
    yPercent: 50,
    ease: "power1.out",
    duration: 1,
    autoAlpha: 0,
    rotateY: 360,
  });
  gsap.to(reflet, {
    x: "150%",
    duration: 2,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.237,0.059 0.22,0.104 0.322,0.518 0.448,1.034 0.563,0.868 1,1 "
    ),
    repeat: -1,
    repeatDelay: 5,
    delay: 1,
  });
  // EGERIES

  const egeries = document.querySelectorAll(".egeries__box__streamers__card");

  egeries.forEach((egerie) => {
    gsap.from(egerie, {
      scrollTrigger: {
        trigger: egerie,
        start: "top bottom", // Déclenche l'animation lorsque le haut de l'élément atteint 10% du haut de la fenêtre
        end: "center center", // Vous pouvez ajuster ceci en fonction de la durée de l'effet que vous désirez
        toggleActions: "play none none reverse",
        markers: false,
      },
      yPercent: 50,
      ease: "power1.out",
      duration: 1,
      autoAlpha: 0,
      stagger: 1,
    });
  });
});
