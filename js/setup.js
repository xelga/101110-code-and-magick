'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');

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

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
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
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var setupUserName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (event) {
  if (event.keyCode === ESC_KEYCODE) {
    if (document.activeElement !== setupUserName) {
      closePopup();
    }
  }
};

var onPopupEnterPress = function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  event.preventDefault();
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', onPopupEnterPress);

setupSubmit.addEventListener('click', function () {
  closePopup();
});

setupSubmit.addEventListener('keydown', onPopupEnterPress);

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

var index = 1;

wizardCoat.addEventListener('click', function (event) {
  event.target.style.fill = COAT_COLORS[index];

  index = index < COAT_COLORS.length - 1 ? ++index : 0;
});

wizardEyes.addEventListener('click', function (event) {
  event.target.style.fill = EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)];
});

setupFireball.addEventListener('click', function (event) {
  event.target.parentNode.style.background = FIREBALL_COLORS[getRandomNumber(0, FIREBALL_COLORS.length)];
});
