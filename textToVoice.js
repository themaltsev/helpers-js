window.textToVoice = (text, speed = '1.1', speaker = 'kostya', returnUrl = true) => {

$$('audio').forEach(e=>{
  e.pause()
  e.remove()

})

let textFilter = text.replace(/\s{2,}/g, ' ').replace(/ /g, '+');

if(textFilter !== 'undefined' && textFilter !== ``){

  let textCut = textFilter.slice(0,990)

  let messageText = textFilter.length > 990 ? textCut : textFilter

  let key = '22fe10e2-aa2f-4a58-a934-54f2c1c4d908'
  let query =`https://tts.voicetech.yandex.net/generate?key=${key}&text=${messageText}&format=mp3&lang=ru-RU&emotion=neutral&speaker=${speaker}&speed=${speed}`
  
  if(returnUrl !== true) return query
  else {
    soundPush(query) 
  }
}
}

