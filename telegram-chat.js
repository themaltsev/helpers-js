// очень простой telegram чат на js
// с сохранением переписки в локал сторедже
// в html не нужно ничего добавлять!!!!


// ИДЁМ В ТЕЛЕГУ В ПОИСКЕ НАХОДИМ BotFather ПИШЕМ ЕМУ /newbot - create a new bot
// АКТИВИРУМ БОТ КОМАНДОЙ СТАРТ ВРОДЕ 

// ПОЛУЧАЕМ ТОКЕН /token - generate authorization token

// ИЗ БАБЛИОТЕ ЮЗАЛ GSAP 
//ЕСЛИ ЧТО 
//import { gsap } from "@l/gsap";
//window.tl = gsap.timeline(); 

// //soundPush('/sound/set-whatsapp.mp3'); эта функция вызова звука есть у меня в репе --- https://github.com/themaltsev/open-plugins/blob/master/add-sound.js

// я юзал глобальные переменные document.querySelector('.chat__body') === $(".chat__body")  инфа тут -- https://github.com/themaltsev/open-plugins/blob/master/global-vars.js

// стили css в самом конце добавить в свой файл
//или сделать так ---
// let css = `<style>сюда стили</style>` 
// $('body').insertAdjacentHTML( 'beforeend', css ) // в это случае они подгузяться прям в боди


// этот файл плагин его нужно импортнуть в ваш гланый файл точку 
//app.js старт
// вот так ----> 
//import {TelegaChat} from '@p/chat'
// далее вызываем инициализацию плагина 
//new TelegaChat().init()
//это уже вызов функционала
//$(".chat__open__pc").addEventListener("click", (e) =>new TelegaChat().open()); // чат выезжает справа
//$(".chat__input").addEventListener("submit", (e) => { // это отправка сообщения
//e.preventDefault();
//new TelegaChat().submit();
//});
//app.js конец




let token = `тут токен бота` //получаем при создании бота
let chatId = `тут id чата //получаем при вызове https://api.telegram.org/bot{token}/getupdates в браузере

//получаем тукущий час)
let hour = new Intl.DateTimeFormat("ru", { hour: "numeric" }).format(
  new Date()
);
//получаем тукущии минуты)
let minute = new Intl.DateTimeFormat("ru", { minute: "numeric" }).format(
  new Date()
);


let oldText = {};

let tpl = `
<div class="chat__wrap">
<h3 class="chat__title">Online Чат
<div class="popup-close chat__close">
    <div class="popup-close-icon"></div>
</div>
</h3>
<div class="chat__body">
<div class="chat__body__item">
<span class="chat__body__item__text">Здравствуйте какой у вас вопрос?</span>
<i class="chat__body__item__time">${hour}:${minute}</i>
</div>
</div>
<form class="chat__input">
    <div class="chat__input__message">
        <input type="text" class="chat__main__input" placeholder="Message" required>
    </div>
    <button class="chat__input__submit lazy-svg" data-src="/img/svg/angle-up.svg" type="submit"></button>
</form>

</div>`;




export class TelegaChat {

init(){ 
    
    $('body').insertAdjacentHTML( 'afterbegin', tpl)

    }



  open() {

        let tl = gsap.timeline()
        tl.fromTo('.chat__wrap', .5, {x:0},{x:'-100%' ,ease: "power4.out"})
        // $('body').classList.add('overflow__hidden');
        $('.chat__wrap').classList.add('open')


        axios.get(`https://api.telegram.org/bot${token}/getupdates`)
        .then(r=>{
        let text = r.data.result.pop().message.text

        oldText.text = text

        })

      $(".chat__close").addEventListener("click", (e) =>
      this.close()
      );
      
      $(".chat__body").scrollTop = 100000;
  }

  close() {
    let tl = gsap.timeline();
    tl.fromTo(".chat__wrap", .5, { x: '-100%' }, { x: '0%'  ,ease: "power4.out"});
    // $("body").classList.remove("overflow__hidden");
    $('.chat__wrap').classList.remove('open')

  }

  submit() {

    let val = $(".chat__main__input").value;
    let tplItem = `<span class="chat__body__item__text">${val}</span>
    <i class="chat__body__item__time">${hour}:${minute}</i>`;


    let clientItem = document.createElement("div");
    clientItem.classList.add("chat__body__item");
    clientItem.classList.add("chat__body__item__client");
    clientItem.innerHTML = tplItem;

    $(".chat__body").appendChild(clientItem);

    $(".chat__main__input").value = "";

    $(".chat__body").scrollTop = 100000;

    axios.get(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${val}`
    );

    this.checkResponse();

    localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

    // если нужен звук отправления вызывай soundPush('/sound/set-whatsapp.mp3');

  }

  checkResponse() {
   const check =  setInterval(() => {

      axios
        .get(
          `https://api.telegram.org/bot{token}/getupdates` // делаем запрос боту 
        )
        .then((r) => {

          let newText = r.data.result.pop().message.text // получаем ответ с крайним сообщением

          if (newText !== oldText.text) { // если текс не похож на старый 

            oldText.text = newText;  
            // значит менеджер ответил
            let tpl = `<span class="chat__body__item__text">${newText}</span>  
            <i class="chat__body__item__time">${hour}:${minute}</i>`;

            let clientItem = document.createElement("div");
            clientItem.classList.add("chat__body__item");
            clientItem.innerHTML = tpl;
            $(".chat__body").appendChild(clientItem); // добавляем ответ менеджера в чат

            localStorage.setItem("historyMessages", $(".chat__body").innerHTML); // кладём в сторедж переписку

            $(".chat__body").scrollTop = 100000;

             // если нужен звук получения вызывай soundPush('/sound/get-whatsapp.mp3');
          }
        });




      
    },2000);

   


  }
}

/// css 


.chat__wrap {
    position: fixed;
    bottom: 10px;
    right: -300px;
    margin: auto;
    width: 300px;
    height: 400px;
    background: #d0d0d0;
    z-index: 99999999;
    box-shadow: 0px 0px 5px #d0d0d0;
    border-radius: 10px;
    overflow: hidden;
    
}
.chat__title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-weight: 800;
    font-family: "2", sans-serif;
    font-size: 22px;
    padding-top: 9px;
    padding-left: 10px;
    padding-bottom: 12px;
    padding-right: 35px;
    color: #fff;
    margin: 0;
    z-index: 9;
    backdrop-filter: blur(20px);
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid #333;
}

.chat__body  {
width: 100%;
height: 100%;
padding-top: 60px;
padding-bottom: 70px;
overflow-y: auto;
display: flex;
flex-direction: column;
align-items: flex-end;
}




.chat__body__item {
    background: #333;
    color: #fff;
    border-radius: 10px;
    padding: 10px 18px;
    padding-right: 40px;
    margin: 5px;
    font-size: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chat__body__item:first-child {
    margin-top: auto;

} 

.chat__body__item__client {
    background: #0070c9
}

.chat__body__item__time {
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 9px;
}


.chat__input {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    backdrop-filter: blur(20px);
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    padding: 7px;
}

.chat__input__add__file {
height: 35px;
width: 35px;
background: #ddd;
margin: 10px;
border-radius: 50%;
}

.chat__input__message {
flex: auto;
}

.chat__main__input {
width: 100%;
height: 35px;
border-radius: 10px;
padding-left: 10px;
}

/* .chat__input__add__voice {
    height: 35px;
    width: 35px;
    background: #ddd;
    margin: 10px;
    border-radius: 50%;
} */

.chat__input__submit {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-left: 10px;
    transform: rotate(90deg);
    background: 0 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
@media (max-width:768px) {
   .chat__wrap {
    bottom: auto;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 99999999;
    box-shadow: none;
    border-radius: 0;
    }
}


