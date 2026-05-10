import express from "express";

import {
  scrapeNews,
  getStories,
} from "../controllers/storyController.js";

const router = express.Router();

router.post("/scrape", scrapeNews);

router.get("/", getStories);

export default router;