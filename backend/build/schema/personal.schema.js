import { z } from 'zod';
const telefonoRegEx = new RegExp(/^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/);
//Validaciones con Zod - Construir un schema
export const personalSchema = z.object({
    nombre: z.string().min(2, 'Minimo 2 caracteres').max(200, 'Maximo 200 Caracteres'),
    direccion: z.string().min(2).max(300),
    //telefono:z.string().min(10).max(15), 
    telefono: z.string().regex(telefonoRegEx),
    estatus: z.number('Solo numeros').int().positive('Solo Numeros Positivos').min(1).max(2)
});
