'use strict';

(function () {
	var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 
	'Юлия', 'Люпита', 'Вашингтон'];

	var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 
	'Топольницкая', 'Нионго', 'Ирвинг'];

	var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 
	'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

	var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

	var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

	var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content.querySelector('.setup-similar-item');

	var similarListElement = document.querySelector('.setup-similar-list');
	var userDialog = document.querySelector('.setup');

	var wizardCoat = document.querySelector('.wizard-coat');
	var wizardEyes = document.querySelector('.wizard-eyes');
	var fireball = document.querySelector('.setup-fireball-wrap');

	var coatColorInput = document.getElementsByName('coat-color');
	var coatEyesInput = document.getElementsByName('eyes-color');
	var fireballInput = document.getElementsByName('fireball-color');

	var generateWizards = function () {
		var wizards = [];

		for (var j = 0; j < 4; j++) {
			wizards.push({
			    name: WIZARD_NAMES[window.random(WIZARD_NAMES)] + ' ' + 
				WIZARD_SURNAMES[window.random(WIZARD_SURNAMES)],
				coatColor: WIZARD_COAT_COLOR[window.random(WIZARD_COAT_COLOR)],
				eyesColor: WIZARD_EYES_COLOR[window.random(WIZARD_EYES_COLOR)]
			});
		}

	  	return wizards;
	};

	var renderWizard = function (wizard) {
		var wizardElement = similarWizardTemplate.cloneNode(true);

		wizardElement.querySelector('.setup-similar-label')
		.textContent = wizard.name;
		wizardElement.querySelector('.wizard-coat')
		.style.fill = wizard.colorCoat;
		wizardElement.querySelector('.wizard-eyes')
		.style.fill = wizard.colorEyes;

		return wizardElement;
	};

	// Отрисовка похожих волшебников
	var successHandler = function (wizards) {
		// var similarWizards = generateWizards();
		var fragment = document.createDocumentFragment();

		for (var i = 0; i < 4; i++) {
			fragment.appendChild(renderWizard(wizards[i]));
		}

		similarListElement.appendChild(fragment);

		userDialog.querySelector('.setup-similar').classList.remove('hidden'); 
		// return similarListElement;
	};

	var errorHandler = function (errorMessage) {
		var node = document.createElement('div');
		node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
		node.style.position = 'absolute';
		node.style.left = 0;
		node.style.right = 0;
		node.style.fontSize = '30px';

		node.textContent = errorMessage;
		document.body.insertAdjacentElement('afterbegin', node);
	};

	// window.colorize(wizardCoat, WIZARD_COAT_COLOR, coatColorInput);
	// window.colorize(wizardEyes, WIZARD_EYES_COLOR, coatEyesInput);
	// window.colorize(fireball, FIREBALL_COLORS, fireballInput);
	window.load(successHandler, errorHandler);
})();