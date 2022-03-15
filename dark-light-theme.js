// плагин для изменения цветовой темы

// По дефу стоит светлая тема импортируем фунции куда угодно и вызываем когда угодно 

//Импортируем CSS с инвертироваными переменными

import wCss from "../css/main-inverse.css";

//Типо так выглядит
// :root {

//   --c1: #0E1621;
//   --c2:#101820;
//   --c3: #17212B;
//   --c4: #17212be5;
//   --c5: #17212b8c;
//   --b1: #ffffff;
//   --b2: #F1F1F1;
//   --a1: #00aeef;
//   --a2: #00afefd5;
//   --bb: #BBBBBB;
//   --dd : #ddd;
//   --ee : #eee;
//   --br1 : 1px solid rgba(0, 0, 0, 0.337);
//   --s1: 0px 0px 15px 0px var(--c3);

// }


//Тут всё понятно 
let themeStyle = document.createElement('style')
themeStyle.classList.add('style__ligth')
themeStyle.innerHTML = wCss.toString()




export function toLigth(){
  // console.log('dark');
  $('.dark__btm').classList.add('active')
  themeStyle.remove()
  localStorage.setItem("darkmode", 'false');
}


export function toDark(){
  // console.log('ligth');
  $('.dark__btm').classList.remove('active')
  document.body.appendChild(themeStyle)
  localStorage.setItem("darkmode", 'true');
}


export function theme(){

if(localStorage.getItem("darkmode")) {

  if(localStorage.getItem("darkmode") === 'true') {
    toDark()
  }
  else {
    toLigth()
    }
} 
else {
    
  // Если хотим автоматическую смену режима оформления то раскомментировать "ТУТ"
  // типо если девайс поддерживает темный режим включиться темный автоматом!!!!!
    
  // Check to see if Media-Queries are supported
  if (window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  // Dark
 // toDark() 1. Тут 
  } else {
  // Light 2. Тут 
  //toLigth() 
  }
  } else {
  // Default (when Media-Queries are not supported)
  toLigth() 
  }
}


 //Пример с моего сайта Fixdevice.pro ! При клике на кнопку меняется тема и класс у кнопки и обратно!

// $('.dark__btm').addEventListener('click',e=>{

//   $('.dark__btm').classList.toggle('active')

//   if($('.dark__btm').classList.contains('active')) {

//   toLigth()
// }
//   else toDark();

// })

}

