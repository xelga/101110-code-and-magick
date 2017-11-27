'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: NAMES[getRandomNumber(0, NAMES.length)] + ' ' + SURNAMES[getRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
  });
}

var similarList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (params) {
  var wizard = wizardTemplate.cloneNode(true);

  wizard.querySelector('.setup-similar-label').textContent = params.name;
  wizard.querySelector('.wizard-coat').style.fill = params.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = params.eyesColor;

  return wizard;
};

var createFragment = function () {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  return fragment;
};

similarList.appendChild(createFragment());

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
