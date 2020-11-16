  function fadeUp(){

    let item = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        let item = entry.target;
        if (entry.isIntersecting && !item.classList.contains('active')) {
          
          item.classList.add('active')
         gsap.fromTo(item, {
           duration: 1, 
           opacity: 0,
           y:200,
           ease: "power1.out",

         },
         {
          opacity: 1,
          y:0,
         }
         
         
         )
        }
      });
    });
    $$(".fade__up").forEach((e) => item.observe(e));


  }
