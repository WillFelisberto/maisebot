const Twit = require('twit');
require('dotenv').config();
var _ = require('underscore');

const maisebom = [
	'mais é bom',
	'OMAISÉBOMMMM',
	'bom d++ familia',
	'MAIS BOM MESMO EIN',
	'bão d+++',
	'O MAIS BOM É',
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
	if (count === maisebom.length - 1) {
		count = 0;
	}
	const BotInit = () => {
		console.log(maisebom[count]);
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

	count++;
	BotInit();
}, 60 * 60 * 1000); // 1 hora
