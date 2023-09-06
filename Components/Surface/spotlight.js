const axios = require("axios");
const cheerio = require("cheerio");
const stealthHeader = require("../Core/index.js");

async function getSpotlight() {
  const data = await axios.get("https://aniwatch.to/home", {
    headers: stealthHeader,
    timeout: 100000,
  });
  const $ = cheerio.load(data.data);
  const items = $(".deslide-item");
  let spotlightarr = [];
  items.each((i, el) => {
    const data1 = $(el).find("img").attr("data-src");
    const data2 = $(el)
      .find(".desi-sub-text")
      .text()
      .split(" ")[0]
      .replace("#", "");
    const data3 = $(el)
      .find(".scd-item.m-hide")
      .text()
      .replace("\n", "")
      .replace("                                    ", "");
    const data4 = $(el)
      .find(".scd-item")
      .text()
      .split("\n")[1]
      .replace("                                    ", "");
    const data5 = $(el)
      .find(".scd-item.mr-1")
      .text()
      .replace("\n", "")
      .replace("                                    ", "");
    const data6 = $(el).find(".desi-head-title").text().replace("\n", "");
    const data7 = $(el).find(".tick-item.tick-sub").text();
    var data8 = $(el).find(".tick-item.tick-eps").text();
    if (data8 == "") {
      data8 = "Not declared yet";
    }
    const data9 = $(el)
      .find(".desi-description")
      .text()
      .replace("                                    ", "")
      .replace("\n", "");
    var dex =
      data9.split("\n")[0] + data9.split("\n")[1] + data9.split("\n")[2];
    if (dex.includes("undefined")) {
      dex = dex.replace("                                undefined", "");
    }
    const data10 = $(el).find(".desi-buttons").find("a").attr("href");
    spotlightarr.push({
      index: data2,
      image: data1,
      title: data6,
      release: data3,
      duration: data4,
      quality: data5,
      cc: data7,
      episodes: data8,
      description: dex,
      url: "https://aniwatch.to" + data10,
    });
  });

  return spotlightarr;
}

module.exports = getSpotlight;
