 //Чекер webp

let supportsWebP = (function () {
    let index = new Promise(function (resolve) {
      let image = new Image();
      image.onerror = function () {
        return resolve(false);
      };
      image.onload = function () {
        return resolve(image.width === 1);
      };
      image.src =
        "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";
    }).catch(function () {
      return false;
    });
    return index;
  })();

 //Сам функционал
function newLazy(){
    let elem = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
    
        if (entry.isIntersecting && !entry.target.classList.contains('loaded')) {
    
          let item = entry.target
    
          let imgUrl = item.getAttribute('data-src')
    
          item.onload = () => item.classList.add('loaded')

          supportsWebP.then((supported) => {
            if (supported) {

              if (imgUrl.length !== "" && imgUrl.slice(-3) !== "svg" ) {
                let pathOld = item
                  .getAttribute("data-src")
                  .replace(".jpg", ".webp")
                  .replace(".png", ".webp")
                  .replace(".jpeg", ".webp")
                  .replace(".PNG", ".webp")
                  .replace(".JPG", ".webp")
                  .replace(".JPEG", ".webp");
                let changeSrc = "/webp/";
                let pathImg = changeSrc + pathOld;
                item.src = pathImg

                item.onerror = e=> {
                  item.src = `img/icons/no_image.svg`
                }

              } else {
                item.src = imgUrl
                item.onerror = e=> {
                  item.classList.add('loaded')
                  item.src = `img/icons/no_image.svg`
                }
              } 

             
            } else {
              item.src = imgUrl  
            } 
          });
    
        }
      });
    });
    document.querySelectorAll("[data-lazy]").forEach((e) => elem.observe(e));
  }
