'use strict';

(function () {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: window.util.NAMES[window.util.getRandomNumber(0, window.util.NAMES.length)] + ' ' + window.util.SURNAMES[window.util.getRandomNumber(0, window.util.SURNAMES.length)],
      coatColor: window.util.COAT_COLORS[window.util.getRandomNumber(0, window.util.COAT_COLORS.length)],
      eyesColor: window.util.EYES_COLORS[window.util.getRandomNumber(0, window.util.EYES_COLORS.length)]
    });
  }

  window.data = wizards;
})();
