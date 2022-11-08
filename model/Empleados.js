import { Schema, model } from "mongoose";

const empleadoSchema = new Schema({
    nombre: {
        type: String,
        uniqued: true
    },
    apellido: {
        type: String,
        uniqued: true
    },
    dni: {
        type: Number,
        uniqued: true
    }
})

export const empleadoModel = model("Empleado", empleadoSchema);