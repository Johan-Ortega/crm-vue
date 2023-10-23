<script setup>
    import { FormKit } from '@formkit/vue'
    import { useRouter} from 'vue-router'
    import ClienteService from '../services/ClienteService';
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/Heading.vue';

    const router = useRouter()

    console.log(router) 

    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSubmit = (data) =>{
        data.estado = 1
        ClienteService.agregarCliente(data)
            .then(respuesta => {
                //Redireccionar
                router.push({ name: 'listado-clientes'})
            })
            .catch(error => console.log(error))
    }
</script>

<template>
    <div class="max-w-screen-lg mx-auto">
        <div class="flex justify-end">
            <RouterLink to="listado-clientes">
                Volver
            </RouterLink>
        </div>
    
        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow text-lg">
            <div class="mx-auto md:w-2/3 py-10 px-6">
                <FormKit
                    type="form"
                    submit-label="Agregar Cliente"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                >
                    <!-- Help se usa en formkit para mostrar un texto al usuario que ayude a llenar cierto campo -->
                    <!-- help="Coloca el Nombre del Cliente que deseas registrar" -->
                    <FormKit
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El Nombre del Cliente es Obligatorio'}"
                    />

                    <FormKit
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El Apellido del Cliente es Obligatorio'}"
                    />

                    <FormKit
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email del Cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El Email del Cliente es Obligatorio',
                                                email: 'Coloca un Email válido'}"
                    />

                    <FormKit
                        type="text"
                        label="Teléfono"
                        name="telefono"
                        placeholder="Teléfono: XXX-XXX-XXXX"
                        validation="*matches:/^[0-9]{3}[0-9]{3}[0-9]{4}$/"
                        :validation-messages="{ matches: 'El Formato no es válido'}"
                    />

                    <FormKit
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa de Cliente"
                    />

                    <FormKit
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto del Cliente"
                    />

                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper{
        max-width: 85%;
    }
</style>