var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 3000
    },
    speed: 2000, 
    slidersPerView: 1,
    effect: "fade"
  });
  var swiper = new Swiper(".section3-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".section4-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  
// FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js 
// FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js 
// FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js 
// FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js 

function locomotiveScroll(){

  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy('#main', {
  scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector('#main').style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

locomotiveScroll();


gsap.from(".nav",{
  y:-100,
  opacity:0,
  duration:1,
  delay:0.5,
  ease:"power3.out"
})
gsap.from(".hero",{
  scale:0,
  opacity:0,
  duration:1,
  delay:0.5,
  ease:"power3.out",
})
gsap.from(".section2 .box",{
  // y:100,
  opacity:0,
  duration:1,
  delay:0.5,
  ease:"power3.out",
  scrollTrigger:{
    trigger:"section2 box",
    start:"top 20%",
    end:"bottom 80%",
    // markers:true,
            // markers: true,

    scrub:1,
  }
})