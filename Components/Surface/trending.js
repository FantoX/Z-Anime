const axios = require("axios");
const cheerio = require("cheerio");
const stealthHeader = require("../Core/index.js");

async function getTrending() {
  const data = await axios.get("https://aniwatch.to/home", {
    headers: stealthHeader,
    timeout: 100000,
  });

  const $ = cheerio.load(data.data);
  const items = $(".swiper-slide.item-qtip");
  let trendingarr = [];

  items.each((i, el) => {
    const data1 = $(el).find(".film-title").text();
    var data2 = $(el).find("span").text();
    const data3 = $(el).find(".film-poster").find("img").attr("data-src");
    const data4 = $(el).find(".item").find("a").attr("href");
    if (data2.startsWith("0")) {
      data2 = data2.replace("0", "");
    }
    let arrData = {
      index: data2,
      title: data1,
      image: data3,
      url: "https://aniwatch.to" + data4,
    };
    trendingarr.push(arrData);
  });

  return trendingarr;
}

module.exports = getTrending;
