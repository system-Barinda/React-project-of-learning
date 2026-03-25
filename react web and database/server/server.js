import express from "express"
import cors from 'cors'
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);

app.get("/api/protected",authMiddleware,(req,res) => {
  res.json({
    message:"You accessed protected data ";
    user:req.user
  });
});

app.listen(5000,() => {
  console.log("server running on port 5000");
});