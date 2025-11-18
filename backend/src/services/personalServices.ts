import mysql from 'mysql2/promise';
import { type Personal,type PersonalNuevo } from '../typesPersonal.js';
import { personalSchema } from '../schema/personal.schema.js';


const conexion = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'pw12001200',
});

export const obtienePersonal = async () =>{
    try{
        // const [results,fields]
        const [results] = await conexion.query("SELECT * FROM personal");
        return results;
    }catch(err){
        return {error: "No se puede obtener la lista de personal"};
    }
}

export const encuentraPersonal = async (id:number) =>{
    try{
        // const [results,fields]
        const [results] = await conexion.query("SELECT * FROM personal WHERE id = ? LIMIT 1",[id]);
        return results;
    }catch(err){
        return {error: "No se puede obtener la lista de personal"};
    }
}

export const agregarPersonal = async (nuevo:PersonalNuevo) =>{
    try {
        const validacion = personalSchema.safeParse(nuevo);
        if(!validacion.success){
            return {error:validacion.error}
        }
        const [results] = await conexion.query("INSERT INTO personal(nombre,direccion,telefono,estatus) VALUES(?,?,?,?)",[nuevo.nombre,nuevo.direccion,nuevo.telefono,nuevo.estatus]);
        return results;
    } catch (error) {
        return {error: "No se puede agregar al personal."}
    }
}

export const modificarPersonal = async (modificado:Personal) =>{
    try {
        const [results] = await conexion.query("UPDATE personal SET nombre=?,direccion=?,telefono=?,estatus=? WHERE id = ?",[modificado.nombre,modificado.direccion,modificado.telefono,modificado.estatus,modificado.id]);
        return results;
    } catch (error) {
        return {error: "No se puede agregar al personal."}
    }
}

export const borrarPersonal = async (id:number) =>{
    try {
        const [results] = await conexion.query("DELETE FROM personal WHERE id = ?",[id]);
        return results;
    } catch (error) {
        return {error: "No se puede borrar el personal"};
    }
}