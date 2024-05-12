import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".custom__box__carousel__line");
  const progressContainer = document.querySelector(
    ".custom__box__carousel__progress"
  );

  // Initialize progress indicators
  function setupProgressIndicators() {
    lines.forEach((line) => {
      const numImages = line.children.length - 3;
      for (let i = 0; i < numImages; i++) {
        let progressIndicator = document.createElement("div");
        progressIndicator.style.opacity = 0.5; // Default opacity
        progressContainer.appendChild(progressIndicator);
      }
    });
    updateProgressIndicator(0); // Set initial active indicator
  }

  function updateProgressIndicator(activeIndex) {
    const indicators = progressContainer.children;
    Array.from(indicators).forEach((indicator, index) => {
      indicator.style.opacity = index === activeIndex ? 1 : 0.5;
    });
  }

  setupProgressIndicators();

  lines.forEach((line) => {
    // Initially set all images off-screen except the first one
    gsap.set(line.children, { xPercent: 100, visibility: "visible" });
    gsap.set(line.children[0], { xPercent: 0 });
  });

  const arrowRight = document.getElementById("arrowRight");
  const arrowLeft = document.getElementById("arrowLeft");

  arrowRight.addEventListener("click", () => navigate("right"));
  arrowLeft.addEventListener("click", () => navigate("left"));

  function navigate(direction) {
    lines.forEach((line) => {
      const items = Array.from(line.children);
      const activeIndex = items.findIndex(
        (item) => gsap.getProperty(item, "xPercent") === 0
      );
      let nextIndex = direction === "right" ? activeIndex + 1 : activeIndex - 1;

      // Ensure index bounds are respected
      nextIndex = Math.max(0, Math.min(items.length - 1, nextIndex));

      // Move only the current and the next/previous image
      if (
        direction === "right" &&
        nextIndex > activeIndex &&
        activeIndex < items.length - 1
      ) {
        const tl = gsap.timeline();
        tl.to(items[nextIndex], {
          xPercent: 0,
          duration: 1,
          ease: "power2.inOut",
        });
        tl.to(
          items[activeIndex],
          { xPercent: -100, duration: 1, ease: "power2.inOut" },
          "<5%"
        );
      } else if (
        direction === "left" &&
        nextIndex < activeIndex &&
        activeIndex > 0
      ) {
        const tl = gsap.timeline();
        tl.to(items[nextIndex], {
          xPercent: 0,
          duration: 1,
          ease: "power2.inOut",
        });
        tl.to(
          items[activeIndex],
          { xPercent: 100, duration: 1, ease: "power2.inOut" },
          "<5%"
        );
      }

      // Update arrow visibility based on the new active index
      gsap.to(arrowLeft, { autoAlpha: nextIndex === 0 ? 0 : 1 });
      gsap.to(arrowRight, {
        autoAlpha: nextIndex === items.length - 1 ? 0 : 1,
      });

      updateProgressIndicator(nextIndex);
    });
  }

  // Initially disable the left arrow
  gsap.set(arrowLeft, { autoAlpha: 0 });

  //RADIO

  const radioButtons = document.querySelectorAll(
    ".radio-option input[type='radio']"
  );

  function updateLineVisibility() {
    const selectedRadio = document.querySelector(
      ".radio-option input[type='radio']:checked"
    );
    const selectedValue = selectedRadio.value;

    lines.forEach((line, index) => {
      // Assuming value attributes 'blue', 'red', 'green', 'yellow' correspond to line indices 0, 1, 2, 3 respectively
      const lineIndex = index; // Example mapping, adjust based on actual mapping logic
      if (
        (selectedValue === "rose" && lineIndex === 0) ||
        (selectedValue === "bleu" && lineIndex === 1)
      ) {
        gsap.to(line, { autoAlpha: 1 });
      } else {
        gsap.to(line, { autoAlpha: 0 }); // Makes other lines less visible or hidden based on requirements
      }
    });

    document.querySelectorAll(".radio-option").forEach((option) => {
      option.classList.remove("selected");
    });

    // Add 'selected' class to the parent of the checked input
    const selectedOption = selectedRadio.parentNode;
    selectedOption.classList.add("selected");
  }

  radioButtons.forEach((button) => {
    button.addEventListener("change", updateLineVisibility);
  });

  updateLineVisibility(); // Call on initial load to set the correct visibility based on the default checked radio

  //PACK
  const packItems = document.querySelectorAll(
    ".custom__box__panel__pack__item"
  );

  packItems.forEach((item) => {
    item.addEventListener("click", () => {
      packItems.forEach((el) => el.classList.remove("activePack"));
      item.classList.add("activePack");
    });
  });
});
