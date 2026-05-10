import app from "./src/app.js";

import connectDB from "./src/db/db.js";

import authRoutes from "./src/routes/authRoutes.js";

import storyRoutes from "./src/routes/storyRoutes.js";

connectDB();

app.use("/api/auth", authRoutes);

app.use("/api/stories", storyRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server is live on port ${PORT}`);

});