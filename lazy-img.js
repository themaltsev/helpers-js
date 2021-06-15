    // npm install intersection-observer 
    ///if you not wanna skip this next row!
    // require("intersection-observer");
    
    let elem = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting && !entry.target.classList.contains('loaded')) {
 
          let item = entry.target

          let imgUrl = item.getAttribute('data-src')

          item.src = imgUrl

          item.onload = () => item.classList.add('loaded')

        }
      });
    });
    document.querySelectorAll(".lazy").forEach((e) => elem.observe(e));
