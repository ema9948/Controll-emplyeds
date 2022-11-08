import { Router } from "express";
import { addEstado, allEstado, deleteEstado, pacthEstado } from "../controller/estadoEmpleadoControll.js";
const estadoEmpleado = Router();

//? AllEmpleados mehtod get
//? addEmpleado method post
//? deleteEmpleado method delete
//? pachtEmpleado method  pacht

estadoEmpleado.get("/allEstado", allEstado)
estadoEmpleado.post("/addEstado", addEstado)
estadoEmpleado.delete("/deleteEstado/:id", deleteEstado)
estadoEmpleado.patch("/pachtEstado/:id", pacthEstado)

export default estadoEmpleado;