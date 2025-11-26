<template>
    <section>
        <h3></h3>
        <h3>Personal</h3>
        <div>
            <router-link :to="{path: '/personal/agregar'}">
            <button class="btn btn-sm btn-outline-primary">
                Agregar <i class="fa fa-plus"></i>
            </button>
            </router-link>
        </div>
    </section>
    <table class="table table-striped">
        <thead>
            <th>Clave</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Estatus</th>
        </thead>
    <tbody>
        <tr v-for="persona in personal" :key="persona.id"> 
            <td>{{ persona.id }}</td>
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.direccion }}</td>
            <td>{{ persona.telefono }}</td>
            <td>{{ persona.estatus }}</td>
        </tr>
    </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePersonal } from '../controladores/usePersonal';
const {traePersonal, personal} = usePersonal()
//Una vez que la pagina se monte(dibuje) en pantalla
//Cuando Se cargue el DOM en pantalla 
    onMounted(async() => {
        await traePersonal()
    })
</script>

<style scoped>
    section{
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        margin-top: 10px;
    }

</style>