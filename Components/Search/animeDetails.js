const axios = require("axios");
const cheerio = require("cheerio");
const stealthHeaderV2 = require("../Core/stealthHeaderV2");

async function animeDetails(name) {
  if (!name || name == "") {
    return console.error(
      "Please enter an anime name to search ! Ex: search('naruto')\n"
    );
  }
  const headers1 = await stealthHeaderV2(
    "https://aniwatch.to/search?keyword=" + name
  );

  const data = await axios.get("https://aniwatch.to/search?keyword=" + name, {
    headers: headers1,
  });
  let $ = cheerio.load(data.data);
  const ddr = $(".flw-item");
  const firstUrl = ddr.find("a").attr("href");
  const refererUrl = "https://aniwatch.to" + firstUrl;
  const headers2 = await stealthHeaderV2(refererUrl);

  const req2 = await axios.get(refererUrl, {
    headers: headers2,
  });
  $ = cheerio.load(req2.data);
  const main = $(".ani_detail-stage");
  const image = main.find(".film-poster img").attr("src");
  const description = $(".film-description.m-hide").text();
  const formattedDescription = description
    .replace("                                    ", "")
    .replace("[Written by MAL Rewrite]", "");
  const title = main.find(".film-name.dynamic-name").text();
  const japaneseTitle = main.find(".film-name.dynamic-name").attr("data-jname");
  const seasondata = $(".os-item");
  let seasons = [];
  seasondata.each((i, el) => {
    const name = $(el).find(".title").text();
    const image = $(el)
      .find(".season-poster")
      .attr("style")
      .replace("background-image: url(", "")
      .replace(");", "");
    const url = "https://aniwatch.to" + $(el).attr("href");

    seasons.push({ name, image, url });
  });

  const scr = $(".item.item-title");
  let latest = [];
  scr.each((i, el) => {
    const heading = $(el).find(".item-head").text();
    const data = $(el).find(".name").text();
    latest.push({ heading, data });
  });

  function getdata(heading) {
    const item = latest.find((element) => element.heading == heading);
    return item ? item.data : "";
  }
  const janame = getdata("Japanese:");
  const Synonyms = getdata("Synonyms:");
  const Aired = getdata("Aired:");
  const Premiered = getdata("Premiered:");
  const Duration = getdata("Duration:");
  const Status = getdata("Status:");
  const rating = getdata("MAL Score:");

  const prd = $(".item-title a.name");
  let producers = "";
  prd.each((i, el) => {
    const name = $(el).text();
    producers = producers + name + ", ";
  });

  const gen = $(".item-list a");
  let genres = "";
  gen.each((i, el) => {
    const name = $(el).text();
    genres = genres + name + ", ";
  });

  const AllData = {
    title: title,
    jtitle: japaneseTitle,
    tmage: image,
    generes: genres.replace(/,\s*$/, ""),
    producers: producers.replace(/,\s*$/, ""),
    rating: rating,
    status: Status,
    duration: Duration,
    premiered: Premiered,
    aired: Aired,
    synonyms: Synonyms,
    jname: janame,
    url: refererUrl,
    Description: formattedDescription,
    parts: seasons.length,
    partsList: seasons,
  };

  return AllData;
}

module.exports = animeDetails;
