import { shallowMount } from "@vue/test-utils";
import Fab from "@/modules/daybook/components/Fab.vue"

describe('Pruebas en fab component',()=>{
    test('debe mostrar el icono por defecto', () => {
        //fa-plus
        const wrapper = shallowMount( Fab ) // * Montamos el shallowMount (Fab) desde nuestra importacion
        const iTag = wrapper.find('i') // * iTag llamamos dentro del wrapper la busqueda de la 'i'
        expect(iTag.classes('fa-plus')).toBeTruthy() // evaluamos si tiene el  iTag <i class="fa-plus"> toBetruthy = tiene que existir
    })
    test('debe mostrar el icono por argumento fa-circle', () => {
        //fa-plus
        // montamos las props de icon obtenidas de Fab
        const wrapper = shallowMount(Fab, {
            props: {
                icon:'fa-circle'
            }
        })
        const iTag = wrapper.find('i') // * iTag llamamos dentro del wrapper la busqueda de la 'i'
        expect(iTag.classes('fa-circle')).toBeTruthy() // evaluamos si tiene el  iTag <i class="fa-plus"> toBetruthy = tiene que existir
    })
    test('debe de emitir el evento on:click cuando se hace click', () => {
        // wrapper.emitted('on:click')

    })
})