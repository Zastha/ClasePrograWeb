import express from 'express';
express

//Creamos la aplicacion a traves del paquete expresss
//y llamamos a su constructor
const app = express();

//Todo lo que regresa al usuario es tipo JSON
app.use(express.json());

//Para escuchar las peticiones del frontend
const PUERTO:number = 3001;

//RUTAS
app.get('/',(_request,response)=>{

    response.send('Estoy en la raiz del servidor')

})

app.get('/HOLA',(_request,response)=>{

    response.send('Estoy en la HOLA del servidor')

})

//Encendemos el servidor y lo ponemos a escuchar peticiones
app.listen(PUERTO, ()=>{
    console.log(`Servidor Encendido escuchando en el puerto ${PUERTO}`);
});

