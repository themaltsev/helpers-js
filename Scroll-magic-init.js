//use scroll magic
import ScrollMagic from "scrollmagic";

// import 'animation.gsap'
import 'debug.addIndicators'


let tl = gsap.timeline();


let arr = document.querySelectorAll('.fade-in-up');

arr.forEach(el => {

    let controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
        // duration: 0, // duration in px eg. 300, 0 = autoplay
        duration: '200', // resposive duration in %
        offset: "200", // offset trigger position by 100px
        triggerElement: el, // what will trigger scene
        triggerHook: 1, // 0=top, 0.5=middle, 1=bottom
        //  triggerHook: 'onEnter' or 'onCenter'or 'onLeave',
        reverse: true, // plays scene on the way up?
    });

    // scene.setTween();

    // add a timeline to a scene

    scene.on("progress", function(e) {
        console.log(e.progress);
        tl.fromTo(el, { opacity: e.progress }, { opacity: e.progress })
    })

    scene.addTo(controller);


    scene.addIndicators({
        name: 'triggerDown', // custom name for your scene
        indent: 520, // indent from the browser edge
        colorStart: 'blue', // custom color - colorEnd
        colorTrigger: 'red',
    })


    console.log(controller)

});
