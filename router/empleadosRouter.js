import { Router } from "express";
import { addEmpleado, allEmpleados, deleteEmpleado, pachtEmpleado } from "../controller/empleadosControllers.js";
const empleadosRouter = Router();

//? AllEmpleados mehtod get
//? addEmpleado method post
//? deleteEmpleado method delete
//? pachtEmpleado method  pacht

empleadosRouter.get("/allEmpleados", allEmpleados)
empleadosRouter.post("/addEmpleado", addEmpleado)
empleadosRouter.delete("/deleteEmpleado/:id", deleteEmpleado)
empleadosRouter.patch("/pachtEmpleado/:id", pachtEmpleado)

export default empleadosRouter;