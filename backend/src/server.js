import express from 'express'
import notesRoutes from './routes/notesRoutes.js';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json()); // Middleware to parse JSON bodies

//simple custom middleware to log request method and URL
//app.use((req, res, next) => {
  //console.log(`Request method is: ${req.method}, Request URL is: ${req.url}`);
  //next();
//});
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});