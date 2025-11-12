import express,{type Request, type Response} from 'express';
//Activamos las rutas

const router = express.Router();

//http://localhost:3001/api/personal/
router.get('/',(_req:Response,res:Request) =>{

})
/*express
const app = express();

//Todo lo que regresa al usuario es tipo JSON
app.use(express.json());
app.get('/',(_request,response)=>{

    response.send('Estoy en la raiz del servidor')

})

app.get('/HOLA',(_request,response)=>{

    response.send('Estoy en la HOLA del servidor')

})*/