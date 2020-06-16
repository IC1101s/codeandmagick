'use strict';

(function () {
	var userDialog = document.querySelector('.setup');
	var setupOpen = document.querySelector('.setup-open');
	var setupClose = userDialog.querySelector('.setup-close');
	var userName = userDialog.querySelector('.setup-user-name');

	// Функция для открытия окна
	var openPopup = function () {
		userDialog.classList.remove('hidden');	
		document.addEventListener('keydown', onPopupEscPress);
	};

	// Функция для закрытия окна
	var closePopup = function () {
		userDialog.classList.add('hidden');	
		document.removeEventListener('keydown', onPopupEscPress);
	};

	// Функция для обработчика событий закрытия окна
	var onPopupEscPress = function (evt) { 
		window.util.isEscEvent(evt, closePopup);
	};

	// Обработчик открытия окна по клику
	setupOpen.addEventListener('click', function () {
		openPopup();
	});

	// Обработчик открытия окна по нажатию Enter
	setupOpen.addEventListener('keydown', function (evt) {
		window.util.isEnterEvent(evt, openPopup);
	});

	// Обработчик закрытия окна по клику
	setupClose.addEventListener('click', function () {
		closePopup();
	});

	// Обработчик закрытия окна по нажатию Enter
	setupClose.addEventListener('keydown', function (evt) {
		window.util.isEnterEvent(evt, closePopup);
	});

	// Обработчик предотвращает закрытие попапа в фокусе userName
	userName.addEventListener('keydown', function (evt) {
	    evt.stopPropagation();
	});
})();