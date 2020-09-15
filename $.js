//global vars
window.$ = (el) => document.querySelector(el);
window.$$ = (el) => document.querySelectorAll(el);
import { madAlert } from "@p/madalert";
window.malert = new madAlert();
import { gsap } from "@l/gsap";
window.tl = gsap.timeline();
window.axios = require("axios");

window.soundPush = (url) => {
  if (window.innerWidth > 768) {//если ширина окна больше 768
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = url; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
};


