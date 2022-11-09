import { empleadoModel } from "../model/Empleados.js"
import { estadoModel } from "../model/EstadoEmpleado.js";

export const allEmpleados = async (req, res) => {
    try {
        const data = await empleadoModel.find({});
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ "error": "Error de servidor" })

    }
}


export const addEmpleado = async (req, res) => {
    const { nombre, apellido, dni } = req.body
    try {

        let empleado = await empleadoModel.findOne({ dni });
        if (empleado) return res.sendStatus(401)

        empleado = new empleadoModel({ nombre, apellido, dni });

        await empleado.save()

        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).json({ "error": "Error de servidor" })
    }

}

export const deleteEmpleado = async (req, res) => {
    const { id } = req.params
    try {
        const empleado = await empleadoModel.findByIdAndDelete(id);
        const estado = await estadoModel.deleteMany({ empleado: id });
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ "error": "Error de servidor" })
    }
}

export const pachtEmpleado = async (req, res) => {
    const { id } = req.params
    const { nombre, apellido, dni } = req.body

    try {
        const empleado = await empleadoModel.findByIdAndUpdate(id, { nombre, apellido, dni });
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ "error": "Error de servidor" })
    }
}

