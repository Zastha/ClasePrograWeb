import {z} from 'zod';

/*const telefonoRegEx = new RegExp(
    /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?$/
)*/

//Validaciones con Zod - construir un schema
export const personalSchema = z.object({
    nombre:z.string().min(2,'Mínimo 2 caracteres').max(200,'Máximo 200 caracteres'),
    direccion:z.string().min(2).max(300),
    // telefono:z.string().min(10).max(15),
    //telefono: z.string().regex(telefonoRegEx),
    //estatus: z.number('Solo números').int().positive('Solo números positivos').min(1).max(2)
    telefono:z.string().min(10).max(15),
    estatus: z.number()
})