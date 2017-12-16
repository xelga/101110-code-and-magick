'use strict';

(function () {
  var CALLBACK_NAME = '__jsonpCallback';
  var SERVER_URL = 'https://1510.dump.academy/code-and-magick';

  window.backend = {
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          if (xhr.response) {
            for (var i = 0; i < xhr.response.length; i++) {
              onError(xhr.response[i].errorMessage);
            }
          } else {
            onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
          }
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 10000; // 10s

      xhr.open('POST', SERVER_URL);
      xhr.send(data);
    },
    load: function (onLoad, onError) {
      window[CALLBACK_NAME] = function (data) {
        onLoad(data);
      };

      var loader = document.createElement('script');
      loader.src = SERVER_URL + '/data' + '?callback=' + CALLBACK_NAME;

      loader.addEventListener('error', function () {
        onError('Произошла ошибка при загрузке данных');
      });

      document.body.append(loader);
    }
  };
})();

