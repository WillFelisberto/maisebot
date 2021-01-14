const Twit = require("twit");
require("dotenv").config();

/* Instancie o bot com as chaves no arquivo .env */
const Bot = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});
console.log("Ligado");

const maisebom = [
  "mais é bom",
  "bom d++ familia",
  "MAIS BOM MESMO EIN",
  "O MAIS É BOM",
  "BOBO LENDO",
  "O MAIS BOM"
];

const randomItem = maisebom[Math.floor(Math.random()*maisebom.length)];

let count = 0;
setInterval(function () {
  const BotInit = () => {
    console.log(count++);
    Bot.post(
      "statuses/update",
      {
        status: randomItem,
      },
      function (err, _data, _response) {
        console.log(err);
      }
    );
  };

  BotInit();
}, 60 * 60 * 1000); // 1 hora
