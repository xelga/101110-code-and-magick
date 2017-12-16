'use strict';

(function () {
  var similarList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardQuantity = 4;

  var renderWizard = function (params) {
    var wizard = wizardTemplate.cloneNode(true);

    wizard.querySelector('.setup-similar-label').textContent = params.name;
    wizard.querySelector('.wizard-coat').style.fill = params.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = params.colorEyes;

    return wizard;
  };

  window.util.appendErrorContainer();

  var onWizardsLoad = function (data) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardQuantity; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }

    similarList.appendChild(fragment);
  };

  var onWizardsError = function (errorMessage) {
    var errorNode = window.util.createErrorNode(errorMessage);
    window.util.removeErrorNode(errorNode);
  };

  window.backend.load(onWizardsLoad, onWizardsError);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
})();
