import express from 'express';
//Creamos la aplicación a través del paquete express
//y llamamos a su constructor
const app = express();
//Configurar rutas para el acceso a personal
import personalRutas from './routes/personalRutas.js';
//Todo lo que regresa al usuario es tipo JSON
app.use(express.json());
//Puerto para escuchar la petición del frontend
const PUERTO = 3001;
//Activar la ruta base
app.use('/api/personal', personalRutas);
//Ruta
// app.get('/',(_req,res) =>{
//     res.send("Ruta raíz del servidor API");
// })
// app.get('/hola',(_req,res) =>{
//     res.send("Ruta hola del servidor API");
// })
//Encendemos el servidor y lo ponemos en escucha
app.listen(PUERTO, () => {
    console.log(`Servidor encendido y escuchando en el puerto ${PUERTO}`);
});
