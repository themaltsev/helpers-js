// воспроизведение звука 

soundPush('тут урл нашего звука')

window.soundPush = (url,text = 'undefined') => {

  $('.btm__voice__on').classList.remove('active')
  $('.btm__voice__off').classList.add('active')
  let audioDef = false

  // if (window.innerWidth > 768) {  }

  let audio = new Audio(); // Создаём новый элемент Audio
  audio.src = url; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
  audio.classList.add('svuk') 
  audio.classList.add('hidden') 
  $('body').appendChild(audio)

  function stop(){
    $('.btm__voice__off').classList.remove('active')
    audio.pause()
    audio.remove()
    $('.btm__voice__on').classList.add('active')
  }

  $('.btm__voice__off').onclick = ()=> stop()

  audio.addEventListener("ended",e=>{
    stop();
    if(text !== 'undefined') textToVoice(text)
  })
  return url
}
