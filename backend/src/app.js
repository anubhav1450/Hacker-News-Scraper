import express from "express";
import cors from "cors";
import storyRoutes from "./routes/storyRoutes.js";
const app = express()
app.use(cors());

app.use(express.json());
app.use("/api/stories", storyRoutes);

export default app;