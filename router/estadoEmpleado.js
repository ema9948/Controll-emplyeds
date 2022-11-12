import { Router } from "express";
import { addEstado, allEstado } from "../controller/estadoEmpleadoControll.js";
import { validEstado } from "../middleware/expressValidator.js";
import { jwtVerify } from "../middleware/jwtVerify.js";
const estadoEmpleado = Router();

//? AllEmpleados mehtod get
//? addEmpleado method post
//! delete and pacth v1 0.0.1
estadoEmpleado.get("/allEstado", allEstado);
estadoEmpleado.post("/addEstado", validEstado, addEstado);

export default estadoEmpleado;
