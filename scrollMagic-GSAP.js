    $$('.kak__item').forEach(el=>{

      let controller = new ScrollMagic.Controller();
      
      let timeline = new TimelineMax();
      timeline
      .to(el.querySelector('i'), .2, {backgroundColor:`#00aeef`, color:`#fff`,scale:1.1})
      .from(el.querySelector('h3'),.2,{y:30},0)
      .from(el.querySelector('p'),.2,{y:35},0) 
    
      let containerScene = new ScrollMagic.Scene({
          triggerElement: el,
          duration: `100`, // duration in px eg. 300, 0 = autoplay
          // duration: '300', // resposive duration in %
          // offset: "0", // offset trigger position by 100px
          triggerHook: 0.5, // 0=top, 0.5=middle, 1=bottom
          //  triggerHook: 'onEnter' or 'onCenter'or 'onLeave',
          reverse: true, // plays scene on the way up?
      })
      
      .setTween(timeline)
      .addTo(controller)
      // .addIndicators({
      //       name: 'triggerDown', // custom name for your scene
      //       indent: 520, // indent from the browser edge
      //       colorStart: 'blue', // custom color - colorEnd
      //       colorTrigger: 'red',
      //   })
      
      
      
      })
