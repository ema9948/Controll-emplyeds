import { Router } from "express";
import { addEmpleado, allEmpleados, deleteEmpleado, pachtEmpleado } from "../controller/empleadosControllers.js";
import { validEmpleado } from "../middleware/expressValidator.js";
import { jwtVerify } from "../middleware/jwtVerify.js";
const empleadosRouter = Router();

//? AllEmpleados mehtod get
//? addEmpleado method post
//? deleteEmpleado method delete
//? pachtEmpleado method  pacht

empleadosRouter.get("/allEmpleados", jwtVerify, allEmpleados)
empleadosRouter.post("/addEmpleado", jwtVerify, validEmpleado, addEmpleado)
empleadosRouter.delete("/deleteEmpleado/:id", jwtVerify, deleteEmpleado)
empleadosRouter.patch("/pachtEmpleado/:id", jwtVerify, pachtEmpleado)

export default empleadosRouter;