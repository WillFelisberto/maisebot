const Twit = require('twit');
require('dotenv').config();
var _ = require('underscore');

const maisebom = [
	'mais é bom',
	'bom d++ familia',
	'bão d+++',
	'MAIS BOM MESMO EIN',
	'O MAIS É BOM',
	'O MAIS BOM',
];

function shuffle(o) {
	for (
		var j, x, i = o.length;
		i;
		j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
	);
	return o;
}

console.log('ligado');
let count = 0;
setInterval(function () {
	const BotInit = () => {
		console.log(count++);
		Bot.post(
			'statuses/update',
			{
				status: shuffle(maisebom).shift(),
			},
			function (err, _data, _response) {
				console.log(err);
			}
		);
	};

	BotInit();
}, 60 * 60 * 1000); // 1 hora
