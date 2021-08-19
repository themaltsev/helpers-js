gsap.from(".kak__item", { //анимируемый элемент
  y: '100px',
  opacity: 0,
  
  scrollTrigger: {
    trigger: ".kak", // триггер
    start: "20% 100%", 
    end: "+=300",
    scrub: .5,
    // markers: true,
    // pin: true
  },

  stagger: {
    amount: .5, 
  }
});
