// очень простой telegram чат на js
// с сохранением переписки в локал сторедже
// в html не нужно ничего добавлять!!!!

//нужен axios для работы

// ИДЁМ В ТЕЛЕГУ В ПОИСКЕ НАХОДИМ BotFather ПИШЕМ ЕМУ /newbot - create a new bot
// АКТИВИРУМ БОТ КОМАНДОЙ СТАРТ ВРОДЕ 

// ПОЛУЧАЕМ ТОКЕН /token - generate authorization token

//ЕСЛИ ЧТО 

// //soundPush('/sound/set-whatsapp.mp3'); эта функция вызова звука (звук уведомления об отправке и получение сообшения) есть у меня в репе --- https://github.com/themaltsev/open-plugins/blob/master/add-sound.js

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
//$(".chat__open__pc").onclick = () => new TelegaChat().open()
//это уже вызов функционала
//$(".chat__open__pc").addEventListener("click", (e) =>new TelegaChat().open()); // чат выезжает справа
//$(".chat__input").addEventListener("submit", (e) => { // это отправка сообщения
//e.preventDefault();
//new TelegaChat().submit();
//});
//app.js конец




let token = `тут токен бота` //получаем при создании бота

let chatId = `тут id чата` //получаем при вызове https://api.telegram.org/bot{token}/getupdates в браузере

let botId = `тут bot id` 


let timeNow = new Date().toLocaleTimeString()

let lastMesText,lastMesTime,nowMesTime,chatUpdater

let tpl = `
<div class="chat__wrap">
<div class="chat__title">Online Чат
<div class="btm__close chat__close">&times;</div>
</div>
<div class="chat__body">
<div class="chat__body__item chat__body__item__manager">
<span class="chat__body__item__user">Менеджер</span>
<span class="chat__body__item__text">Здравствуйте какой у вас вопрос?</span>
<i class="chat__body__item__time">${timeNow}</i>
</div>
</div>
<div class="chat__input">
    <div class="chat__input__message">
        <textarea type="text" class="chat__main__input" aria-label="Напишите сообщение" placeholder="Напишите сообщение" required></textarea>
    </div>
    <button class="chat__input__submit" aria-label="Отправить сообщение" style="background-image:url('img/svg/angle-up.svg')"></button>
</div>

</div>`;




export class TelegaChat {

init(){ 
    
    $('body').insertAdjacentHTML( 'afterbegin', tpl)

    let store = localStorage.getItem("historyMessages");

    if (store !== null) {
      $('.chat__body').innerHTML = store
    }

    $('.chat__main__input').addEventListener('keypress', (e)=>{

      if(e.key === `Enter`) this.submit();

    })

    $(".chat__input__submit").onclick = () => this.submit();

    

  }



  open() {

        $(".chat__close").addEventListener("click", (e) =>this.close());

        $(".chat__body").scrollTop = 100000;

        $('.chat__wrap').classList.add('open')

        axios.get(`https://api.telegram.org/bot${botId}:${token}/getupdates`)

        .then(r=>{

          lastMesTime = r.data.result[r.data.result.length - 1].message.date

        })

        if(typeof ym === 'function') ym(49104928,'reachGoal','chat-open')

        chatUpdater =  setInterval(() => this.checkResponse(),1000)

  }

  close() {
    $('.chat__wrap').classList.remove('open')
    // clearInterval(chatUpdater);
  }

  submit() {

    let val = $(".chat__main__input").value;

    if(val !== ``) {


    let tplItemClient = `<div class="chat__body__item chat__body__item__client">
    <span class="chat__body__item__user">Вы</span>
    <span class="chat__body__item__text">${val}</span>
    <i class="chat__body__item__time">${timeNow}</i></div>`;


    $('.chat__body').innerHTML += tplItemClient;

    $(".chat__main__input").value = ``.trim()

    $(".chat__body").scrollTop = 100000;

    axios.get(`https://api.telegram.org/bot${botId}:${token}/sendMessage?chat_id=${chatId}&text=${val}`)

    //soundPush('/sound/set-whatsapp.mp3');

  }
  else {
    alert(`Введите текст`)
  }
}

  checkResponse() {

      axios.get(`https://api.telegram.org/bot${botId}:${token}/getupdates`)
        .then((r) => {

          nowMesTime = r.data.result[r.data.result.length - 1].message.date

          if(nowMesTime !== lastMesTime) {

          lastMesTime = nowMesTime

          let Text = r.data.result.pop().message.text

            let tplItemMenager = `<div class="chat__body__item chat__body__item__manager">
            <span class="chat__body__item__user">Вы</span>
            <span class="chat__body__item__text">${Text}</span>
            <i class="chat__body__item__time">${timeNow}</i></div>`;
            
            $(".chat__body").innerHTML += tplItemMenager;
  
           if(localStorage) localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

            $(".chat__body").scrollTop = 100000;

            //soundPush('/sound/get-whatsapp.mp3');

        }
        });


  }
}


/// css 

