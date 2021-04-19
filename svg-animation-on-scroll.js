  //получаем губу с инерцией

window.onscroll = e =>{

    let speed = checkScrollSpeed()*0.5
  
    if(speed > -200 && speed > 200){
    }
    else {
  
       speed = speed + 140
  
        let coors = `M 0 0 L 800  0 L 800 100 Q 400 ${speed} 0 100 Z`
  
        let tl = gsap.timeline();
  
        tl.to('.wave__item path',{duration:1.4, attr:{d:coors} ,ease: "elastic.out(1.2, 0.1)",});
      
    }
  
  };
