import express, {json} from "express";
import morgan from 'morgan';
//  importing rputes
import hamburguesaRoutes from './routes/hamburguesa'
import ingredienteRoutes from './routes/ingrediente'
import config from "config/config.json"
// inicializacion

const app = express();


//  moddlewears
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/hamburguesa',hamburguesaRoutes);
app.use('/ingrediente',ingredienteRoutes);



export default app;

