'use strict';

(function () {
	var ESC_KEY = 'Escape';
	var ENTER_KEY = 'Enter';

	window.util = {
		// Свойтсво с кодом на кнопку Esc
		isEscEvent: function (evt, action) {
			if (evt.key === ESC_KEY) {
				action();
			}
		},
		// Свойтсво с кодом на кнопку Enter
		isEnterEvent: function (evt, action) {
			if (evt.key === ENTER_KEY) {
				action();
			}
		}
	};
})();