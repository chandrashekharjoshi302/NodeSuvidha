const express = require("express");

const connectDB = require("./config/db");

// const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const bookRoutes = require("./routes/bookRoutes");

const app = express();
// app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/hey", (req, res) => {
  res.send("hey");
});

connectDB().then(() => {
  app.listen(7777, () => {
    console.log("Server running on port 7777");
  });
});
