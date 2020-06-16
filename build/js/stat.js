'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var FONT_GAP2 = 40;
var TEXT_HEIGHT = 20;
var BAR_GAP = 40;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP * 3 - TEXT_HEIGHT * 2 - FONT_GAP * 3;
var colorBar = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
	var maxElement = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}

	return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

	ctx.font = '16px PT Mono';

	var maxTime = getMaxElement(times);

	for (var i = 0; i < players.length; i++) {
		ctx.fillStyle = '#000000';

		ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP + GAP) * i, 
		CLOUD_HEIGHT - CLOUD_Y - TEXT_HEIGHT - GAP - (barHeight * times[i]) / maxTime);

		ctx.fillText(players[i], CLOUD_X + FONT_GAP2 + (BAR_WIDTH + FONT_GAP2 + GAP) * i, CLOUD_HEIGHT - GAP);
		if (players[i] === 'Вы') {
		    ctx.fillStyle = colorBar;
		} else {
			ctx.fillStyle = 'hsl(235,' + Math.floor(Math.random() * 100) + '%, 50%)';
		}

		ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP + GAP) * i, 
		CLOUD_Y + CLOUD_HEIGHT - BAR_WIDTH, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
	}

	ctx.fillStyle = '#000000';
	ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP);
	ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP * 2);
};