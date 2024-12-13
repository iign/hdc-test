import { inView, animate, stagger } from "motion";

const runAnimations = () => {
  const targets = document.querySelectorAll(
    ".main-feature__main-img, .main-feature__img-2, .main-feature__img-3, .main-feature__content"
  );

  targets.forEach((image) => {
    inView(image, () => {
      animate(
        image,
        { opacity: 1, transform: "translateY(0px)" },
        { duration: 0.8, easing: "ease-in-out" }
      );
    });

    animate(
      image,
      { opacity: 0, transform: "translateY(10px)" },
      { duration: 0 }
    );
  });
};

export default runAnimations;
