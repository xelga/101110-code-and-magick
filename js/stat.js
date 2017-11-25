'use strict';

window.renderStatistics = function (ctx, names, times) {
  var defaultColor = '#000'; // px;
  var maxColumnHeight = 150; // px;
  var histogramItemWidth = 40; // px;
  var histogramItemIndent = 50; // px;
  var columnUserColor = 'rgba(255, 0, 0, 1)';
  var alphaChannel;
  var initialOffsetX = 150; // px;
  var initialOffsetY = 90; // px;
  var textLineHeight = 15; // px;
  var contentTopIndent = 5; // px;
  var time = 0;
  var maxTime = 0;
  var columnWidth = histogramItemWidth; // px;
  var columnHeight = 0; // px;
  var columnOffsetY = 0; // px;
  var timeOffsetY = initialOffsetY + textLineHeight + (contentTopIndent * 2) + maxColumnHeight; // px;
  var histogramItemOffsetX = initialOffsetX; // px;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = defaultColor;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', initialOffsetX, 40);
  ctx.fillText('Список результатов:', initialOffsetX, 60);

  for (var i = 0; i < times.length; i++) {
    time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }

  for (var j = 0; j < times.length; j++) {
    columnHeight = maxColumnHeight * times[j] / maxTime;
    columnOffsetY = initialOffsetY + contentTopIndent + (maxColumnHeight - columnHeight);
    alphaChannel = Math.random().toFixed(1);
    alphaChannel = alphaChannel > 0 ? alphaChannel : 1;

    ctx.fillText(names[j], histogramItemOffsetX, initialOffsetY);
    ctx.fillStyle = names[j] === 'Вы' ? columnUserColor : 'rgba(0, 0, 255,' + alphaChannel + ')';

    ctx.fillRect(histogramItemOffsetX, columnOffsetY, columnWidth, columnHeight);
    ctx.fillStyle = defaultColor;
    ctx.fillText(times[j].toFixed(0), histogramItemOffsetX, timeOffsetY);

    histogramItemOffsetX += histogramItemIndent + histogramItemWidth;
  }
};
