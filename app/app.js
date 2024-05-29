import express from 'express';
import { config } from 'dotenv';
import ruta from './routes/routes.pago.js';

const app = express();

app.use(express.json())
const PORT = process.env.PORT || 9101;
app.set('port', PORT);
app.use('/', ruta);


export default app;
