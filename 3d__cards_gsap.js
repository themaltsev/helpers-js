let item = $('.card__3d');

gsap.set(item, { transformStyle: "preserve-3d" }),

item.addEventListener('mousemove', function(e){

  let that = e.target 

  let W = e.pageX - window.innerWidth / 2;
  let H = e.pageY - window.innerHeight / 2;

  gsap.to(item, {
          rotationY: 0.001 * W,
          rotationX: -0.001 * H,
          transformPerspective: 500,
          transformOrigin: "center center -400",
          ease: "power2.out"
        });

})
