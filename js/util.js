'use strict';
(function () {
  window.util = {
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,
    NAMES: [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ],
    SURNAMES: [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'
    ],
    COAT_COLORS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    EYES_COLORS: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    FIREBALL_COLORS: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    appendErrorContainer: function () {
      var errorContainer = document.createElement('div');
      errorContainer.classList.add('error-container');
      errorContainer.style = 'position: fixed; top: 25px; left: 25px; z-index: 10;';
      document.body.appendChild(errorContainer);
    },
    createErrorNode: function (errorMessage) {
      var errorContainer = document.querySelector('.error-container');
      var errorNode = document.createElement('div');
      errorNode.textContent = errorMessage;
      errorNode.style = 'background: #f00; max-width: 300px; padding: 15px 20px; margin-bottom: 15px; color: #fff;';
      errorContainer.appendChild(errorNode);

      return errorNode;
    },
    removeErrorNode: function (element) {
      setTimeout(function () {
        element.parentNode.removeChild(element);
      }, 5000);
    }
  };
})();
