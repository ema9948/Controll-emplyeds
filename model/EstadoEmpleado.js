import { Schema, model } from "mongoose";

const estadoSchema = new Schema({
    ingreso: {
        type: Date,
    },
    egreso: {
        type: Date,
    },
    estado: {
        type: Boolean,
        default: false
    },
    empleado: {
        type: Schema.Types.ObjectId,
        ref: "Empleado",
        required: true
    },
})

export const estadoModel = model("Estado", estadoSchema);