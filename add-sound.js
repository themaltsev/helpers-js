// воспроизведение звука 

soundPush('тут урл нашего звука')

window.soundPush = (url) => {
  if (window.innerWidth > 768) {//если ширина окна больше 768
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = url; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
};
