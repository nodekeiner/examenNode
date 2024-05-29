import { pool } from "../config/bd";

export const mostrarpago = async (req, res) => {
   const {id} = req.params;
   try {
      const respuesta = await pool.query(`CALL SP_MOSTRAR_PAGO(?)` , [id]);
    res.json({"respuesta": respuesta[0]})
   } catch (error) {
    res.json({"error": error})
   }
  }
  
  export const listarpago = async (req, res) => {
   try {
      const respuesta = await pool.query(`CALL SP_LISTAR_PAGO()`);
    res.json({"respuesta": respuesta[0]})
   } catch (error) {
    res.json({"error": error})
   }
  }
  
  export const insertarpago = async (req, res) => {
    const datos = req.body
    const {valor} = datos
    try {
      const respuesta = await pool.query(`CALL SP_INSERTAR_PAGO(?) ` ,[valor]);
    res.json({"respuesta": respuesta[0]})
   } catch (error) {
    res.json({"error": error})
   }
  }
  
  
  export const modificarpago = async (req, res) => {
    const {id} = req.params
    const datos = req.body
    const {valor} = datos
    try {
      const respuesta = await pool.query(`CALL SP_MODIFICAR_PAGO(?,?) ` ,[id, valor]);
    res.json({"respuesta": respuesta[0]})
   } catch (error) {
    res.json({"error": error})
   }
  }
  export const eliminarpago = async (req, res) => {
    const {id} = req.params;
    try {
       const respuesta = await pool.query(`CALL SP_ELIMINAR_PAGO(?)` , [id]);
     res.json({"respuesta": respuesta[0]})
    } catch (error) {
     res.json({"error": error})
    }
  }
  

