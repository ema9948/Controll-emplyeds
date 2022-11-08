import { estadoModel } from "../model/EstadoEmpleado.js";
import { empleadoModel } from "../model/Empleados.js";


export const addEstado = async (req, res) => {
    const { dni, fecha } = req.body
    console.log(fecha)

    try {

        //? existe el empleado 
        const datos = await empleadoModel.findOne({ dni })
        //? id empleado
        const empleado = datos?._id

        if (!datos) return res.status(404).json({ "admin": "Empleado no registrado." })

        //?buscamos si la existe la fecha ingreso
        const create_on = await estadoModel.findOne({ empleado }).sort({ ingreso: -1 })
        console.log(create_on)
        //? verificamos si tiene ingreso y si la fecha y el ingreso son diferentes
        if (create_on) {
            if (!create_on?.egreso && create_on?.ingreso.valueOf() !== fecha.valueOf()) {
                create_on.egreso = fecha
                create_on.estado = true;
                if (((create_on?.ingreso.getHours() - 24) - (create_on?.egreso.getHours() - 24)) != 8 && (create_on?.ingreso.getDate() != create_on?.egreso.getDate())) {
                    const data = (24 - ((create_on?.ingreso.getHours() - 24) - (create_on?.getHours() - 24)));
                    create_on.extra = data;
                    await create_on.save();
                    return res.sendStatus(200);
                }
                if (((create_on?.ingreso.getHours() - 24) - (create_on?.egreso.getHours() - 24)) > 8 && (create_on?.ingreso.getDate() == create_on?.egreso.getDate())) {
                    const data = (create_on?.ingreso.getHours() - 24) - (create_on?.getHours() - 24)
                    create_on.extra = data;
                    await create_on.save();
                    return res.sendStatus(200);
                }
                await create_on.save();
                return res.sendStatus(200);
            }

        }

        //?Creamos el ingreso
        const data = new estadoModel({ dni, ingreso: fecha, empleado })
        await data.save()
        return res.sendStatus(201)


    } catch (error) {
        return res.status(500).json({ "error": "Error de servidor" })
    }
}

export const allEstado = async (req, res) => {
    try {
        const datos = await estadoModel.find({}).populate({
            path: 'empleado',
            select:
                'nombre apellido dni',
        })
        return res.json(datos)
    } catch (error) {
        return res.status(500).json({ "error": "Error de servidor" })
    }
}



