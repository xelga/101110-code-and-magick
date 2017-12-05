'use strict';

(function () {
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

    for (var i = 0; i < window.data.length; i++) {
      fragment.appendChild(renderWizard(window.data[i]));
    }

    return fragment;
  };

  similarList.appendChild(createFragment());

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
})();
