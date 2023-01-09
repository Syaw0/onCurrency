const cheerio = require("cheerio");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getCurrentData = async () => {
  const coins = [];

  console.log("getting data");
  const resp = await fetch("https://www.coingecko.com/");
  const data = await resp.text();
  const $ = cheerio.load(data);
  console.log("pars data");
  const list = $('[data-target="currencies.contentBox"] tr').each(
    (index, el) => {
      let coinForm = {};
      coinForm.icon = $(el).find("td:nth-child(3) div img").attr("src");
      coinForm.name = $(el)
        .find("td:nth-child(3) div a span:nth-child(1)")
        .text();
      coinForm.subName = $(el)
        .find("td:nth-child(3) div a span:nth-child(2)")
        .text();

      coinForm.price = $(el).find("td:nth-child(4) div span").text();
      coinForm.hour1 = $(el).find("td:nth-child(5) span").text();
      coinForm.hour24 = $(el).find("td:nth-child(6) span").text();
      coinForm.day7 = $(el).find("td:nth-child(7) span").text();

      coinForm.Hour24Volume = $(el).find("td:nth-child(8) span").text();
      coinForm.marketCap = $(el).find("td:nth-child(9)  span").text();
      coinForm.weeklyStat = $(el).find("td:nth-child(12) img").attr("src");

      coins.push(coinForm);
    }
  );

  return coins;
};

module.exports = getCurrentData;
