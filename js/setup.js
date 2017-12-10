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
})();
