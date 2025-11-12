import express from 'express';
express

//Creamos la aplicacion a traves del paquete expresss
//y llamamos a su constructor
const app = express();

//Todo lo que regresa al usuario es tipo JSON
app.use(express.json());

//Configurar rutas para el acceso de personal

import personalRutas from './routes/personalRutas.js';

// /api/personal <-- Ruta base /
app.use('/api/personal',personalRutas);

//Para escuchar las peticiones del frontend
const PUERTO:number = 3001;

//RUTAS
/*app.get('/',(_request,response)=>{

    response.send('Estoy en la raiz del servidor')

})

app.get('/HOLA',(_request,response)=>{

    response.send('Estoy en la HOLA del servidor')

})*/

//Encendemos el servidor y lo ponemos a escuchar peticiones
app.listen(PUERTO, ()=>{
    console.log(`Servidor Encendido escuchando en el puerto ${PUERTO}`);
});

