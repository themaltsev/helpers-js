// очень простой telegram чат на js
//

let hour = new Intl.DateTimeFormat("ru", { hour: "numeric" }).format(
  new Date()
);
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

    let store = localStorage.getItem("historyMessages");


    if (store !== null) {
      $('.chat__body').innerHTML = store
    }
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
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=144065722&text=${val}`
    );

    this.checkResponse();

    localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

    soundPush('/sound/set-whatsapp.mp3');

  }

  checkResponse() {
   const check =  setInterval(() => {

      axios
        .get(
          "https://api.telegram.org/bot1363266801:AAHWocchldFbEF4Po2vegB7xKg0t9gjHw3w/getupdates"
        )
        .then((r) => {

          let newText = r.data.result.pop().message.text

          if (newText !== oldText.text) {

            oldText.text = newText;
            // значит менеджер ответил
            let tpl = `<span class="chat__body__item__text">${newText}</span> 
            <i class="chat__body__item__time">${hour}:${minute}</i>`;

            let clientItem = document.createElement("div");
            clientItem.classList.add("chat__body__item");
            clientItem.innerHTML = tpl;
            $(".chat__body").appendChild(clientItem);

            localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

            $('.chat__wrap').classList.contains('open')? "": CustomPush.showPushTelega()

            $(".chat__body").scrollTop = 100000;

            soundPush('/sound/get-whatsapp.mp3');
          }
        });




      
    },2000);

   


  }
}
