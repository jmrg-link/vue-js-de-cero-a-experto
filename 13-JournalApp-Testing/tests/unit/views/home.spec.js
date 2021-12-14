import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue"

describe("Pruebas en el Home.vue", () => {
    test('Debe de renderizar el componente correctamente', () => {
        const wrapper = shallowMount(Home)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('hacer click en un btn debe redireccionar a no-entry', ()=> {
        const mockRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount( Home, {
            global:{
                mocks: {
                    $router: mockRouter
                }
            }
        })
        // Wrapper busca que un boton sea llamado y trigger es lanzado con el click del evento
        wrapper.find('button').trigger('click')
        // expect: se espera que mockRouter.push lanze cuando .tobehavebeencalled (cuando sea llamado)
        // expect(mockRouter.push).toHaveBeenCalled()
        expect(mockRouter.push).toHaveBeenCalledWith({name:'no-entry'})
    })
})