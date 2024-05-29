
const { Router } = require("express");
const ruta = Router();
ruta.get("/pago/:id", _controllers.mostrarpago);
ruta.get("/listar", _controllers.listarpago);
ruta.post("/insertar", _controllers.insertarpago);
ruta.put("/modificar/:id", _controllers.modificarpago);
ruta["delete"]("/eliminar/:id", _controllers.eliminarpago);
