'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var artefactsList = setup.querySelector('.setup-artifacts-shop');
  var dropZone = setup.querySelector('.setup-artifacts');
  var draggedItem = null;

  artefactsList.addEventListener('dragstart', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      draggedItem = event.target.cloneNode(true);
      event.dataTransfer.setData('text/plain', event.target.alt);
      dropZone.style.outline = '2px dashed red';
    }
  });

  dropZone.addEventListener('dragstart', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      draggedItem = event.target;
      event.dataTransfer.setData('text/plain', event.target.alt);
    }
  });

  artefactsList.addEventListener('dragend', function () {
    dropZone.style.outline = '';
  });

  dropZone.addEventListener('dragover', function (event) {
    event.preventDefault();
    return false;
  });

  dropZone.addEventListener('drop', function (event) {
    if (event.target.tagName.toLowerCase() === 'div' && event.target.childNodes.length === 0) {
      event.target.appendChild(draggedItem);
      event.target.style.background = '';
    }
    event.preventDefault();
  });

  dropZone.addEventListener('dragenter', function (event) {
    if (event.target.tagName.toLowerCase() === 'div' && event.target.childNodes.length === 0) {
      event.target.style.background = 'yellow';
    }
    event.preventDefault();
  });

  dropZone.addEventListener('dragleave', function (event) {
    if (event.target.tagName.toLowerCase() === 'div') {
      event.target.style.background = '';
    }
    event.preventDefault();
  });

  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  wizardCoat.addEventListener('click', function () {
    window.colorizeElement(wizardCoat, window.util.COAT_COLORS, fillElement);
  });

  wizardEyes.addEventListener('click', function () {
    window.colorizeElement(wizardEyes, window.util.EYES_COLORS, fillElement);
  });

  setupFireball.addEventListener('click', function () {
    window.colorizeElement(setupFireball, window.util.FIREBALL_COLORS, changeElementBackground);
  });
})();
