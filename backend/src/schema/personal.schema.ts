import{z} from 'zod';



//Validaciones con Zod - Construir un schema
export const personalSchema = z.object({
    nombre:z.string().min(2,'Minimo 2 caracteres').max(200,'Maximo 200 Caracteres'),
    direccion:z.string().min(2).max(300),
    //telefono:z.string().min(10).max(15), 
    telefono: z.string(),
    estatus: z.number('Solo numeros').int().positive('Solo Numeros Positivos').min(1).max(2)
})