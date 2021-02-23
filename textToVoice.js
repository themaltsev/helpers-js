window.textToVoice = (text, speaker = 'ermilov', speed = '1.0') => {
text.replace(/ /g, "+")
let key = '22fe10e2-aa2f-4a58-a934-54f2c1c4d908'
let query =`https://tts.voicetech.yandex.net/generate?key=${key}&text=${text}&format=mp3&lang=ru-RU&emotion=neutral&speaker=${speaker}&speed=${speed}`
soundPush(query)
}
