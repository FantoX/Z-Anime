const axios = require("axios");
const cheerio = require("cheerio");
const stealthHeaderV2 = require("../Core/stealthHeaderV2");

async function getMovies(page) {
  if (!page || page == "") {
    page = 1;
  }
  const refererUrl = "https://aniwatch.to/movie?page=" + page;
  const headers = await stealthHeaderV2(refererUrl);
  const data = await axios.get(refererUrl, {
    headers: headers,
  });
  const $ = cheerio.load(data.data);
  let list = [];
  const ddr = $(".flw-item");
  ddr.each((i, el) => {
    const data1 = $(el).find(".film-name").text();
    const data2 = $(el).find("img").attr("data-src");
    const data3 = $(el).find("a").attr("href");
    var data4 = $(el).find(".tick-rate").text();
    var data5 = $(el).find(".tick-item.tick-sub").text();
    var data6 = $(el).find(".tick-item.tick-dub").text();
    const data8 = $(el).find(".film-name").find("a").attr("data-jname");
    const data7 = $(el).find(".tick-item.tick-sub").text();
    if (data4 != "18+") {
      data4 = "All";
    } else {
      data4 = "18+";
    }

    if (data5 >= "1") {
      data5 = "Yes";
    } else {
      data5 = "No";
    }

    if (!data6 || data6 == "") {
      data6 = "No";
    } else {
      data6 = "Yes";
    }

    list.push({
      title: data1,
      jname: data8,
      image: data2,
      url: "https://aniwatch.to" + data3,
      age: data4,
      sub: data5,
      dub: data6,
      totalepisode: data7,
    });
  });
  return list;
}

module.exports = getMovies;
