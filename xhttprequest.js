
var request = function (data){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://apihost.ru/d2_150221.php', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.onload = function() {
		if (xhr.status === 200) {
			try {
				fname = JSON.parse(xhr.responseText).fname;
				audio.src = fname;
				audio.load();
				audio.autoplay = true;
			} catch(e) {
			    alert('ведутся технические работы');
			}

		}
	};
	xhr.send(encodeURI(data));
}

request(data)
