$(".hamburger").addEventListener('click', e => {
    let tl = gsap.timeline();
    e.target.classList.toggle("is-active");
    if ($(".hamburger").classList.contains("is-active")) {
      let tl = gsap.timeline();
      tl.set("#my-menu", { display: "flex"})
      .to("#my-menu", .2, { y: '-100%' })
      .staggerFromTo(
        ".my-menu-block-item",
        .1,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
        "0.05"
      );
      $('body').classList.add('overflow__hidden')

    } else {
      let tl = gsap.timeline();
      tl.to("#my-menu", .2, { display: "none", y: "0%" })
      .set("#my-menu", { display: "none"});
      $('body').classList.remove('overflow__hidden');
    }
  });

  document.onscroll = () => {
    if (
      (document.documentElement.scrollTop || document.body.scrollTop) >
      window.innerHeight
    ) {
      $(".top").classList.add("active");
      $(".top").onclick = () => window.scrollTo(0, -110);
    } else {
      $(".top").classList.remove("active");
    }
  };


