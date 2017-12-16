'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupWizardForm = setup.querySelector('.setup-wizard-form');

  var onWizardFormLoad = function () {
    setup.classList.add('hidden');
  };

  var onWizardFormError = function (errorMessage) {
    var errorNode = window.util.createErrorNode(errorMessage);
    window.util.removeErrorNode(errorNode);
  };

  setupWizardForm.addEventListener('submit', function (event) {
    event.preventDefault();
    window.backend.save(new FormData(setupWizardForm), onWizardFormLoad, onWizardFormError);
  });
})();
