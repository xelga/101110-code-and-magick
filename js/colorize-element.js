'use strict';

(function () {
  window.colorizeElement = function (element, color, callback) {
    color = color[window.util.getRandomNumber(0, color.length)];

    if (typeof callback === 'function') {
      callback(element, color);
    }
  };
})();
