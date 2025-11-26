import {ref} from 'vue';
import personalApi from "../api/personalAPI";
import type { Personal, PersonalAgregar } from '../interfaces/personal-interfaces';

export const usePersonal = () =>{
const personal = ref<Personal[]>([]);

    const traePersonal = async () =>{
    const respuesta = await personalApi.get<Personal[]>('/')
        personal.value = respuesta.data;
    }

    const agregarPersonal = async(persona: PersonalAgregar) => {
        persona.estatus = Number(persona.estatus);
        const respuesta = await personalApi.post('/',persona);
        if(respuesta.data.affectedRows >= 1){
            console.log('Dato insertado');
        }
    }

return{
    personal,
    traePersonal,
    agregarPersonal
}

}

