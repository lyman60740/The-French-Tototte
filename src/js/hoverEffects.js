import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  // LOGO
  const colorsLogo = document.querySelector(".navBar__logo .colors");
  document
    .querySelector(".navBar__logo")
    .addEventListener("mouseenter", function () {
      gsap.fromTo(
        colorsLogo,
        {
          x: "-100%",
          y: "50%",
        },
        {
          x: "0%",
          y: "0",
          duration: 0.5,
          ease: "power1.Out",
        }
      );
    });

  document
    .querySelector(".navBar__logo")
    .addEventListener("mouseleave", function () {
      gsap.fromTo(
        colorsLogo,
        {
          x: "0%",
          y: "0",
        },
        {
          x: "130%",
          y: "0%",
          duration: 0.2,
          ease: "power1.in",
          overwrite: "auto",
        }
      );
    });

  // CTA
  const cta = document.querySelector(".navBar__cta");
  const colorsCta = document.querySelector(".navBar__cta .colors");
  const bg2 = document.querySelector(".navBar__cta__bg2");

  let colorAppearCta = gsap.fromTo(
    colorsCta,
    {
      x: "-100%",
      y: "50%",
    },
    {
      x: "130%",
      y: "0%",
      duration: 0.8,
      ease: "power3.inOut",
      paused: true,
    }
  );

  let bgAppearCta = gsap.to(bg2, {
    autoAlpha: 1,
    duration: 0.8,
    ease: "power3.inOut",
    paused: true,
  });

  cta.addEventListener("mouseenter", function () {
    colorAppearCta.play();
    bgAppearCta.play();
  });

  cta.addEventListener("mouseleave", function () {
    colorAppearCta.reverse();
    bgAppearCta.reverse();
  });
});
