const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://chandrashekharjoshi02:plXjxyNZkVBYFNYx@cluster0.lhux9.mongodb.net/suvidha_node"
      )
      .then(() => console.log("MongoDB Connected..."));
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
