import "./db/db.js"
import "dotenv/config"
import express from "express";
import cors from "cors";
import userRouter from "./router/userRouter.js";
import empleadosRouter from "./router/empleadosRouter.js";
import estadoEmpleado from "./router/estadoEmpleado.js";

const app = express()

var whitelist = [process.env.URL_FRONT, process.env.URL_FRONT2];

app.use(cors({
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}))

app.use(express.json());

app.use("/api/v1/user", userRouter)
app.use("/api/v1/empleados", empleadosRouter)
app.use("/api/v1/estados", estadoEmpleado)



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("http://localhost:" + PORT));
