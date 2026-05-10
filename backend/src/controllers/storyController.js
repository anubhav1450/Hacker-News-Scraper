import Story from "../models/Story.js";
import scrapeStories from "../../../frontend/src/utils/scraper.js";

export const scrapeNews = async (req, res) => {

  try {

    await scrapeStories();

    res.status(200).json({
      message: "Stories scraped successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const getStories = async (req, res) => {

  try {

    const stories = await Story.find()
      .sort({ points: -1 });

    res.status(200).json(stories);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
