import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import authRoutes from "./src/routes/authRoutes.js";


connectDB();
app.use("/api/auth", authRoutes);


app.listen(3000, () => {
  console.log("Server is live");
});