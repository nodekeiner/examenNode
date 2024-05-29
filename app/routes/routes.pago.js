import { Router } from "express";
import { mostrarpago, listarpago, insertarpago, modificarpago, eliminarpago} from "../controllers/controllers.js"


const ruta = Router();

ruta.get("/pago/:id", mostrarpago); 
ruta.get("/listar", listarpago);
ruta.post("/insertar", insertarpago);
ruta.put("/modificar/:id", modificarpago);
ruta.delete("/eliminar/:id", eliminarpago);


export default ruta;
