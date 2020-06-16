'use strict';

(function () {
	window.colorize = function (element, colors, valueInput) {
		element.addEventListener('click', function () {
			var color = colors[window.random(colors)];
			if (element.tagName.toLowerCase() === 'div') {
				element.style.backgroundColor = color;
				valueInput.value = element.style.backgroundColor;
			} else {
				element.style.fill = color;
				valueInput.value = element.style.fill;
			}
		});
	};
})();