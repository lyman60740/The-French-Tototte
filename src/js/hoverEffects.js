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

  //BENTO

  const elegant = document.querySelector(".bento__box__elegant");

  let elegantAppearImg = gsap.to(".bento__box__elegant img", {
    duration: 0.5,
    scale: 1.05,
    xPercent: 5,
    ease: "power1.inOut",
    paused: true,
  });

  let elegantAppearBg = gsap.to(".bento__box__elegant__bg", {
    duration: 0.5,
    autoAlpha: 1,
    ease: "power1.inOut",
    paused: true,
  });

  elegant.addEventListener("mouseenter", function () {
    elegantAppearImg.play();
    elegantAppearBg.play();
  });

  elegant.addEventListener("mouseleave", function () {
    elegantAppearImg.reverse();
    elegantAppearBg.reverse();
  });

  const personnalisable = document.querySelector(
    ".bento__box__personnalisable"
  );

  let personnalisableAppearImg = gsap.to(".bento__box__personnalisable img", {
    duration: 0.4,
    scale: 1.05,
    xPercent: 3,
    ease: "power1.inOut",
    paused: true,
  });

  let personnalisableAppearBg = gsap.to(".bento__box__personnalisable__bg", {
    duration: 0.3,
    autoAlpha: 1,
    ease: "power1.inOut",
    paused: true,
  });

  personnalisable.addEventListener("mouseenter", function () {
    personnalisableAppearImg.play();
    personnalisableAppearBg.play();
  });

  personnalisable.addEventListener("mouseleave", function () {
    personnalisableAppearImg.reverse();
    personnalisableAppearBg.reverse();
  });

  const made = document.querySelector(".bento__box__made");

  let madeAppearImg = gsap.to(".bento__box__made img", {
    duration: 0.4,
    scale: 1.1,
    rotate: -5,
    ease: "power1.inOut",
    paused: true,
  });

  let madeAppearBg = gsap.to(".bento__box__made__bg", {
    duration: 0.3,
    autoAlpha: 1,
    ease: "power1.inOut",
    paused: true,
  });

  made.addEventListener("mouseenter", function () {
    madeAppearImg.play();
    madeAppearBg.play();
  });

  made.addEventListener("mouseleave", function () {
    madeAppearImg.reverse();
    madeAppearBg.reverse();
  });

  const innovante = document.querySelector(".bento__box__innovante");

  let innovanteAppearImg = gsap.to(".bento__box__innovante img", {
    duration: 0.4,
    yPercent: -10,
    rotate: 2,
    ease: "power1.inOut",
    paused: true,
  });

  let innovanteAppearBg = gsap.to(".bento__box__innovante__bg", {
    duration: 0.3,
    yPercent: -20,
    ease: "power1.inOut",
    paused: true,
  });

  innovante.addEventListener("mouseenter", function () {
    innovanteAppearImg.play();
    innovanteAppearBg.play();
  });

  innovante.addEventListener("mouseleave", function () {
    innovanteAppearImg.reverse();
    innovanteAppearBg.reverse();
  });

  const savoureuse = document.querySelector(".bento__box__savoureuse");

  let savoureuseAppearImg = gsap.to(".bento__box__savoureuse img", {
    duration: 0.8,
    xPercent: -12,
    ease: "power3.inOut",
    paused: true,
  });

  savoureuse.addEventListener("mouseenter", function () {
    savoureuseAppearImg.play();
  });

  savoureuse.addEventListener("mouseleave", function () {
    savoureuseAppearImg.reverse();
  });

  const hebergement = document.querySelector(".bento__box__hebergement");

  let hebergementAppearImg = gsap.to(".bento__box__hebergement__img", {
    duration: 0.4,
    height: "80px",
    ease: "power1.inOut",
    paused: true,
  });

  let hebergementAppearBg = gsap.to(".bento__box__hebergement__bg", {
    duration: 0.3,
    autoAlpha: 1,
    ease: "power1.inOut",
    paused: true,
  });

  hebergement.addEventListener("mouseenter", function () {
    hebergementAppearImg.play();
    hebergementAppearBg.play();
  });

  hebergement.addEventListener("mouseleave", function () {
    hebergementAppearImg.reverse();
    hebergementAppearBg.reverse();
  });

  const underline = document.querySelector(".plug__discover span");

  underline.addEventListener("mouseenter", function () {
    gsap.to(".plug__discover__underline", {
      duration: 0.9,
      scaleX: 1,
      ease: "elastic.out(1.5,0.6)",
    });
  });

  underline.addEventListener("mouseleave", function () {
    gsap.to(".plug__discover__underline", {
      duration: 0.3,
      scaleX: 0,
      ease: "linear",
      overwrite: "auto",
    });
  });
});
