import express from "express";

import {
  scrapeNews,
  getStories,
  getSingleStory,
  toggleBookmark,
} from "../controllers/storyController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/scrape", scrapeNews);

router.get("/", getStories);

router.get("/:id", getSingleStory);

router.post(
  "/:id/bookmark",
  authMiddleware,
  toggleBookmark
);

export default router;