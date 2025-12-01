<template>
    <div class="container mt-5" v-if="personal[0]">
        <div class="card">
            <div class="card">
                <div class="card-header">
                    <h4>Borrar Personal</h4>
                </div>
                <div v-if ="mensaje == 1" class="alert alert-warning" role="alert">
                    Seguro de borrar la informacion?
                    <i class="fa fa-warning"></i>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        ID
                        <input type="text" class="form-control" v-model="personal[0].id"  disabled>
                    </div>
                    <div class="mb-3">
                        Nombre
                        <input type="text" class="form-control" v-model="personal[0].nombre" disabled>
                    </div>
                    <div class="mb-3">
                        Direccion
                        <input type="text" class="form-control" v-model="personal[0].direccion" disabled>
                    </div>
                    <div class="mb-3">
                        Telefono
                        <input type="text" class="form-control" v-model="personal[0].telefono" disabled>
                    </div>
                    <div class="mb-3">
                        Estatus
                        <input type="text" class="form-control" v-model="personal[0].estatus" disabled>
                    </div>
                    <div class="mb-3">
                        
                        <button class="btn btn-danger" @click="borrarPersonal(personal[0])">
                            Borrar
                        </button>
                    </div>
             </div>
                </div>
        </div>

    </div>
</template>

<script setup lang="ts">
    import {onMounted, watch} from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { usePersonal } from '../controladores/usePersonal';
    const {traePersonaID,personal,mensaje, borrarPersonal} = usePersonal();
    let idPersona:number = 0
    //Parametros de la URL
    const route = useRoute();
    //Moverme de URL
    const routerRedirect = useRouter();
    //Observador - watch
    watch(
        () => mensaje.value,
        newID =>{
            routerRedirect.push('/personal');
        }
    );

    onMounted(async () =>{
        idPersona =  Number(route.params.id);
        await traePersonaID(idPersona);
    })


</script>
    
<style scoped>

</style>