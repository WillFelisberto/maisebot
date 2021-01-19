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

const Bot = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

console.log('ligado');
let count = 0;
setInterval(function () {
	const BotInit = () => {
		Bot.post(
			'statuses/update',
			{
				status: maisebom[count],
			},
			function (err, _data, _response) {
				console.log(err);
			}
		);
	};

	if (count === maisebom.length - 1) {
		count = 0;
	}
	count++;
	BotInit();
}, 60 * 60 * 1000); // 1 hora
