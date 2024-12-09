import Hero from "./hero-block";

const initMobileMenu = () => {
  let main_navigation = document.querySelector("#mobile-menu");
  document
    .querySelector("#primary-menu-toggle")
    .addEventListener("click", function (e) {
      this.setAttribute(
        "aria-expanded",
        this.getAttribute("aria-expanded") === "true" ? "false" : "true"
      );
      main_navigation.classList.toggle("hidden");
    });
};

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  Hero();
});
