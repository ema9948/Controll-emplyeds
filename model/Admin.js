import { Schema, model } from "mongoose";


const adminSchema = new Schema({
    nombre: {
        type: String,
        default: "admin"
    }
    ,
    password: {
        type: String,
        default: "romadrid"
    }
})

export const adminModel = model("Admin", adminSchema);
