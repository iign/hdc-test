import Splide from "@splidejs/splide";
import "@splidejs/splide/css/core";

const Hero = () => {
  console.log("run hero");
  const heroSplide = new Splide("#hero-splide", {
    type: "fade",
    autoplay: true,
    interval: 3000,
    cover: true,
    arrows: false,
    pagination: true,
    rewind: true,
  });

  heroSplide.mount();
};

export default Hero;
