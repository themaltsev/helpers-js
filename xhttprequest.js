// let text2 = text.slice(0,990)
// text2.replace(/ /g, "+")
// let key = '22fe10e2-aa2f-4a58-a934-54f2c1c4d908'
// let query =`https://tts.voicetech.yandex.net/generate?key=${key}&text=${text2}&format=mp3&lang=ru-RU&emotion=neutral&speaker=${speaker}&speed=${speed}`
// // soundPush(query)




// var request = function (data){
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('POST', 'https://apihost.ru/d2_150221.php', true);
// 	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
// 	xhr.onload = function() {
// 		if (xhr.status === 200) {
// 			try {
// 				fname = JSON.parse(xhr.responseText).fname;
// 				audio.src = fname;
// 				audio.load();
// 				audio.autoplay = true;
// 			} catch(e) {
// 			    alert('ведутся технические работы');
// 			}

// 		}
// 	};
// 	xhr.send(encodeURI(data));
// }

// request(data)
