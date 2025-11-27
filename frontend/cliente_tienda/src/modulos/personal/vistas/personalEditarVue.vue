<template>
    <div class="container mt-5" v-if="personal[0]">
        <div class="card">
            <div class="card">
                <div class="card-header">
                    <h4>Editar Personal</h4>
                </div>
                <div v-if ="mensaje == 1" class="alert alert-success" role="alert">
                    Datos actualizados con exito
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        Nombre
                        <input type="text" class="form-control" v-model="personal[0].nombre">
                    </div>
                    <div class="mb-3">
                        Direccion
                        <input type="text" class="form-control" v-model="personal[0].nombre">
                    </div>
                    <div class="mb-3">
                        Telefono
                        <input type="text" class="form-control" v-model="personal[0].nombre">
                    </div>
                    <div class="mb-3">
                        Estatus
                        <input type="text" class="form-control" v-model="personal[0].nombre">
                    </div>
                    <div class="mb-3">
                        
                        <button class="btn btn-primary">
                            Agregar
                        </button>
                    </div>
             </div>
                </div>
        </div>

    </div>
</template>

<script setup lang="ts">
    import {onMounted, ref} from 'vue';
    import { useRoute } from 'vue-router';
    import type { PersonalAgregar } from '../interfaces/personal-interfaces';
    import { usePersonal } from '../controladores/usePersonal';
    const {traePersonaID,personal,mensaje} = usePersonal();
    let idPersona = 0
    const route = useRoute();
    onMounted(async () =>{
        idPersona =  Number(route.params.id);
        await traePersonaID(idPersona);
    })


</script>
    
<style scoped>

</style>