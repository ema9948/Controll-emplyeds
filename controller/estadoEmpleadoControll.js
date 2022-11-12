import { estadoModel } from "../model/EstadoEmpleado.js";
import { empleadoModel } from "../model/Empleados.js";
import moment from "moment/moment.js";

export const addEstado = async (req, res) => {
  const { dni } = req.body;
  const fecha = moment().format();

  try {
    const empleadoExiste = await empleadoModel.findOne({ dni });
    //? id empleado
    const empleado = empleadoExiste?._id;

    if (!empleadoExiste) return res.sendStatus(404);

    //?buscamos si la existe la fecha ingreso
    const create_on = await estadoModel
      .findOne({ empleado })
      .sort({ ingreso: -1 });

    if (create_on) {
      if (!create_on.egreso) {
        const horaExtra = moment(fecha).diff(create_on?.ingreso, "hours");

        if (horaExtra > 8) {
          const horaExtraTotales = horaExtra - 8;
          create_on.egreso = fecha;
          create_on.extra = horaExtraTotales + "+";
          create_on.estado = true;
          await create_on.save();
          return res.sendStatus(200);
        }

        create_on.egreso = fecha;
        create_on.estado = true;
        await create_on.save();
        return res.sendStatus(200);
      }
    }
    //?Creamos el ingreso
    const data = new estadoModel({ dni, ingreso: fecha, empleado });
    await data.save();
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).json({ error: "Error de servidor" });
  }
};

export const allEstado = async (req, res) => {
  try {
    const empleadoExiste = await estadoModel.find({}).populate({
      path: "empleado",
      select: "nombre apellido dni",
    });
    return res.json(empleadoExiste);
  } catch (error) {
    return res.status(500).json({ error: "Error de servidor" });
  }
};
