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

  supportsWebP.then((supported) => {
    if (supported) {
      //  console.log('Load WebP!')
      lazyWebp();
    } else {
      //  console.log('Load JPEG!')
      lazyJust();
    }
  });
