import {ref} from 'vue';
import personalApi from "../api/personalAPI";
import type { Personal, PersonalAgregar } from '../interfaces/personal-interfaces';

export const usePersonal = () =>{
const personal = ref<Personal[]>([]);
let mensaje = ref(0);
    const traePersonal = async () =>{
    const respuesta = await personalApi.get<Personal[]>('/')
        personal.value = respuesta.data;
    }

    const agregarPersonal = async(persona: PersonalAgregar) => {
        persona.estatus = Number(persona.estatus);
        const respuesta = await personalApi.post('/',persona);
        if(respuesta.data.affectedRows >= 1){
            console.log('Dato insertado');
            mensaje.value=1;
        }
    }

    const traePersonaID = async (id:number) => {
        const respuesta = await personalApi.get<Personal[]>('/'+id);
        personal.value = respuesta.data
    }

    const actualizarPersonal = async (personal: Personal) =>{
        const respuesta = await personalApi.put('/',personal);
        if(respuesta.data.affectRows >= 1){
            mensaje.value = 1;
        }
    }

    const borrarPersonal = async (personal: Personal) =>{
        const respuesta = await personalApi.delete('/',{data:{id:personal.id}});
        if(respuesta.data.fieldCount == 0){
            mensaje.value = 1;
        }
    }

return{
    personal,
    traePersonal,
    agregarPersonal,
    mensaje,
    traePersonaID,
    actualizarPersonal,
    borrarPersonal
}

}

