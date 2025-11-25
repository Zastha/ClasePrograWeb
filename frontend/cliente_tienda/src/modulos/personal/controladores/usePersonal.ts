import {ref} from 'vue';
import personalApi from "../api/personalAPI";
import type { Personal } from '../interfaces/personal-interfaces';

export const usePersonal = () =>{
const personal = ref<Personal[]>([]);

    const traePersonal = async () =>{
    const respuesta = await personalApi.get<Personal[]>('/')
        personal.value = respuesta.data;
    }

return{
    personal,
    traePersonal
}

}

