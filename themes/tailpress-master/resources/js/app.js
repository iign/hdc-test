import Hero from "./hero-block";
import Tabs from "./tabs";
import runAnimations from "./animations";

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

const initTabs = () => {
  var tablists = document.querySelectorAll(".tabs [role=tablist]");
  for (var i = 0; i < tablists.length; i++) {
    new Tabs(tablists[i]);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  Hero();
  initTabs();
  runAnimations();
});
