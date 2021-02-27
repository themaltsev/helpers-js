// плагин для изменения цветовой темы

let changeThemeBtm = `<div class="change__theme">
<div class="change__theme__tab active"></div>
<div class="change__theme__text">Темная тема</div>
</div>`


export function toDark(){
    if($('.style__ligth')) $('.style__ligth').remove()
    $('.change__theme__tab').classList.add('active')
    localStorage.setItem("darkmode", 'true');
}


export function toLigth(){
  $('.change__theme__tab').classList.remove('active')
  localStorage.setItem("darkmode", 'false');

  if(!localStorage.getItem("inverse-css")) {
    axios.get('/assets/inverse.min.css')
    .then(r=>{
      let themeStyle = document.createElement('style')
      themeStyle.innerHTML = r.data
      themeStyle.classList.add('style__ligth')
      document.body.appendChild(themeStyle)
      localStorage.setItem("inverse-css", r.data);
    })
  }
  else {
    let themeStyle = document.createElement('style')
    themeStyle.innerHTML = localStorage.getItem("inverse-css")
    themeStyle.classList.add('style__ligth')
    document.body.appendChild(themeStyle)
    $('.inverse-css')
  }


}


export function theme(){

  $('.footer__text').insertAdjacentHTML( 'beforeend', changeThemeBtm)

  if(localStorage.getItem("darkmode")) {
    if(localStorage.getItem("darkmode") === 'true') {
      toDark()
      console.log(localStorage.getItem("darkmode"));
    }
    else {
      toLigth()
      console.log(localStorage.getItem("darkmode"));
     }
  } 
  else {
    // Check to see if Media-Queries are supported
    if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    // Dark
    toDark()
    } else {
    // Light
    toLigth() 
    }
    } else {
    // Default (when Media-Queries are not supported)
    // toLigth() 
    }
  }

    
$('.change__theme__tab').addEventListener('click',e=>{
  e.target.classList.toggle('active')
  if($('.change__theme__tab').classList.contains('active')) {
    toDark()
     CustomPush.show({title: `Темная тема включена`});
  }
  else { 
    toLigth() 
     CustomPush.show({title: `Темная тема отключена`});
  }
})

}

