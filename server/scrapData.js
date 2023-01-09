const cheerio = require("cheerio");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getCurrentData = async () => {
  const coins = [];

  try {
    const resp = await fetch("https://www.coingecko.com/");
    const data = await resp.text();
    const $ = cheerio.load(data);
    $('[data-target="currencies.contentBox"] tr').each((index, el) => {
      let coinForm = {};
      coinForm.icon = $(el).find("td:nth-child(3) div img").attr("src");
      coinForm.name = $(el)
        .find("td:nth-child(3) div a span:nth-child(1)")
        .text();
      coinForm.subName = $(el)
        .find("td:nth-child(3) div a span:nth-child(2)")
        .text();

      coinForm.price = $(el).find("td:nth-child(4) div span").text();
      const hour1 = $(el).find("td:nth-child(5) span");
      const hour24 = $(el).find("td:nth-child(6) span");
      const day7 = $(el).find("td:nth-child(7) span");

      coinForm.hour1 = {
        value: hour1.text(),
        isGreen: hour1.hasClass("text-green"),
      };
      coinForm.hour24 = {
        value: hour24.text(),
        isGreen: hour24.hasClass("text-green"),
      };
      coinForm.day7 = {
        value: day7.text(),
        isGreen: day7.hasClass("text-green"),
      };
      coinForm.Hour24Volume = $(el).find("td:nth-child(8) span").text();
      coinForm.marketCap = $(el).find("td:nth-child(9)  span").text();
      coinForm.weeklyStat = $(el).find("td:nth-child(12) img").attr("src");

      coins.push(coinForm);
    });
  } catch (err) {
    return { status: false };
  }
  return { status: true, data: coins };
};

module.exports = getCurrentData;
