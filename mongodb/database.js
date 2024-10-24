import mongoose from "mongoose";

let isConnected = false; // Track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true); // Set strict query mode

  if (isConnected) {
    console.log("MongoDB is connected successfully!");
    return;
  }

  try {
    // Correct the mongoose.connect call by passing the URI and options
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "artify",  // Database name
    });

    isConnected = true;

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};