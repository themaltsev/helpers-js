//global vars
window.$ = (el) => document.querySelector(el);
window.$$ = (el) => document.querySelectorAll(el);
import { madAlert } from "@p/madalert";
window.malert = new madAlert();
import { gsap } from "@l/gsap";
window.tl = gsap.timeline();
window.axios = require("axios");
import { CustomPush } from "@p/custom-push";
window.CustomPush = new CustomPush();
import { zHidden } from "@z/zayavka-hidden";
window.zHidden = new zHidden();

window.soundPush = (url) => {
  if (window.innerWidth > 768) {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = url; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
};


window.cutText = (el,count) =>{
  $$(el).forEach(e => {
     let fullText = e.textContent
     if(fullText.length > count) {
      let cutText = `${e.textContent.slice(0,count)}...`
      e.textContent = cutText
      let readMore = document.createElement('div');
      readMore.classList.add('read__more')
      readMore.textContent = `Читать ещё`
      e.appendChild(readMore)
      e.onclick = () => {
       e.innerText = fullText
      }
     }
  });
}