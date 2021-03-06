'use strict';

(function () {
	var URL = 'https://javascript.pages.academy/code-and-magick/data';
	var TIMEOUT_IN_MS = 10000;
	var statusCode = {
		OK: 200
	};

	window.load = function (onLoad, onError) {
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';

		xhr.addEventListener('load', function () {
			if (xhr.status === statusCode.OK) {
				onLoad(xhr.response);
			} else {
				onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
			}		
		});

		xhr.addEventListener('error', function () {
			onError('Произошла ошибка соединения');
		});

		xhr.addEventListener('timeout', function () {
			onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
		});

		xhr.timeout = TIMEOUT_IN_MS; // 10s

		xhr.open('GET', URL);
		xhr.send();
	};
})();