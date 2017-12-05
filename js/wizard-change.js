'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');

  var index = 1;

  wizardCoat.addEventListener('click', function (event) {
    event.target.style.fill = window.util.COAT_COLORS[index];

    index = index < window.util.COAT_COLORS.length - 1 ? ++index : 0;
  });

  wizardEyes.addEventListener('click', function (event) {
    event.target.style.fill = window.util.EYES_COLORS[window.util.getRandomNumber(0, window.util.EYES_COLORS.length)];
  });

  setupFireball.addEventListener('click', function (event) {
    event.target.parentNode.style.background = window.util.FIREBALL_COLORS[window.util.getRandomNumber(0, window.util.FIREBALL_COLORS.length)];
  });
})();
