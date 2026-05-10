import axios from "axios";
import * as cheerio from "cheerio";

import Story from "../models/Story.js";

const scrapeStories = async () => {

  try {

    const { data } = await axios.get(
      "https://news.ycombinator.com/"
    );

    const $ = cheerio.load(data);

    const stories = [];

    const rows = $(".athing");

    for (let i = 0; i < 10; i++) {

      const row = rows[i];

      const title = $(row)
        .find(".titleline a")
        .text();

      const url = $(row)
        .find(".titleline a")
        .attr("href");

      const subtext = $(row).next();

      const pointsText = subtext
        .find(".score")
        .text();

      const points = parseInt(pointsText) || 0;

      const author = subtext
        .find(".hnuser")
        .text();

      const postedAt = subtext
        .find(".age")
        .text();

      stories.push({
        title,
        url,
        points,
        author,
        postedAt,
      });
    }

    await Story.deleteMany();

    await Story.insertMany(stories);

    console.log("Stories scraped successfully");

  } catch (error) {

    console.log(error.message);

  }
};

export default scrapeStories;