import mongoose from "mongoose";
import "dotenv/config"

const uri = process.env.URI

try {
    await mongoose.connect(uri);
    console.log("DB Connect");
} catch (error) {
    console.log("DB Error Connect");
}