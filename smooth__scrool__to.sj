document.onscroll = () => {
  if (
    (document.documentElement.scrollTop || document.body.scrollTop) >
    window.innerHeight
  ) {
    $(".top").classList.add("active");

    $(".top").onclick = () => {
      
      document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

  }

  } else {
    $(".top").classList.remove("active");
  }
};
