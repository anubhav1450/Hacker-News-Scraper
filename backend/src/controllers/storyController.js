import Story from "../models/Story.js";
import scrapeStories from "../utils/scraper.js";

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
export const toggleBookmark = async (req, res) => {

  try {

    const story = await Story.findById(
      req.params.id
    );

    const userId = req.user.id;

    const alreadyBookmarked =
      story.bookmarks.includes(userId);

    if (alreadyBookmarked) {

      story.bookmarks =
        story.bookmarks.filter(
          (id) => id.toString() !== userId
        );

    } else {

      story.bookmarks.push(userId);

    }

    await story.save();

    res.status(200).json({
      message: "Bookmark updated",
      bookmarks: story.bookmarks,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};