

sessionStorage.setItem(`data-scroll-for-${data.current.url.path}`, window.pageYOffset);



setTimeout(() => {
      window.scrollTo({
        top: +sessionStorage.getItem(`data-scroll-for-${location.pathname}`),
        behavior: "smooth"
        });
}, 500);
