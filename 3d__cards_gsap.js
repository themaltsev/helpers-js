export function XS(elems){

    $$(elems).forEach(item => {
    
      gsap.set(item, { transformStyle: "preserve-3d" }),
    
      item.addEventListener('mousemove', function(e){

        let that = e.target


        // для элементов шириной с блок

        let W = e.offsetX - that.clientWidth/ 2;
        let H = e.offsetY - that.clientHeight/ 2;


        // для элементов во всю ширину страницы

        // let W = e.pageX - window.innerWidth / 2;
        // let H = e.pageY - window.innerHeight / 2; 
      
            gsap.to(item, {
                rotationY: 0.05 * W,
                rotationX: -0.05 * H,
                transformPerspective: 500,
                transformOrigin: "center center -400",
                ease: "power1.out"
              });

      
      });
    
      item.addEventListener('mouseout', e=>{
      
        gsap.to(item, {
                rotationY: 0,
                rotationX: 0,
                transformPerspective: 500,
                transformOrigin: "center center -400",
                ease: "power2.out"
              });
    
      })
    
    });



}



export function XL(elems){

    $$(elems).forEach(item => {
    
      gsap.set(item, { transformStyle: "preserve-3d" }),
    
      item.addEventListener('mousemove', function(e){

        let that = e.target


        // для элементов шириной с блок

        // let W = e.offsetX - that.clientWidth/ 2;
        // let H = e.offsetY - that.clientHeight/ 2;


        // для элементов во всю ширину страницы

        let W = e.pageX - window.innerWidth / 2;
        let H = e.pageY - window.innerHeight / 2; 
      
        gsap.to(item, {
                rotationY: 0.001 * W,
                rotationX: -0.01 * H,
                transformPerspective: 500,
                transformOrigin: "center center -400",
                ease: "power4.out"
              });
      
      });
    
      item.addEventListener('mouseout', e=>{

      
        gsap.to(item, {
                rotationY: 0,
                rotationX: 0,
                transformPerspective: 500,
                transformOrigin: "center center -400",
                ease: "power2.out"
              });
    
      })
    
    });



}
