import { adminModel } from "../model/Admin.js"
import { jwtGen } from "../utils/jwtControll.js";

export const login = async (req, res) => {
    const { nombre, password } = req.body;
    try {
        let admin = await adminModel.findOne({ nombre })
        if (!admin) return res.status(200).json({ "user": "No existe el usuario." });
        admin = await adminModel.findOne({ password })
        if (!admin) return res.status(200).json({ "user": "contraseña incorrecta." });
        const token = jwtGen(admin?.id, res)
        return res.status(200).json({ nombre: admin.nombre, token })

    } catch (error) {
        return res.status(500).json({ "error": "Error de servidor" })

    }
}

export const register = async (req, res) => {

    const { nombre, password } = req.body;

    try {

        let admin = await adminModel.findOne({ nombre });

        if (admin) return res.status(200).json({ "admin": "admin ya existrado" });

        admin = new adminModel({ nombre, password });

        await admin.save();

        return res.status(201).json({ "admin": "admin registrado" });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "error": "Error de servidor" })
    }
}

export const fargotPassword = async (req, res) => {
    const { nombre, password } = req.body

    try {
        let admin = await adminModel.findOne({ nombre });
        if (!admin) return res.status(404).json({ "admin": "admin no registrado" });
        admin.password = password;
        console.log(admin)
        await admin.save();
        return res.sendStatus(200);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ "error": "Error de servidor" })
    }

}