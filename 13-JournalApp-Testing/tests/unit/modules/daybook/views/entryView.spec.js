import {shallowMount} from '@vue/test-utils'
import {createStore} from 'vuex'

import journal from '@/modules/daybook/store/journal'
import {journalState} from '../../../mock-data/test-journal-state'

import EntryView from '@/modules/daybook/views/EntryView.vue'
import swal from "sweetalert2";

const createVuexStore = (initialState) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: {...initialState}
            }
        }
    })

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()
}))


describe('Pruebas en el EntryView', () => {
    const store = createVuexStore(journalState)
    store.dispatch = jest.fn()
    const mockRouter = {
        push: jest.fn()
    }
    let wrapper
    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallowMount(EntryView, {
            props: {
                id: '-MqUePtgfaib9tio3XUF'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        })
    })

    test('debe de sacar al usuario si el :ID no existe', () => {
        const wrapper = shallowMount(EntryView, {
            props: {
                id: 'Este ID no existe en el STORE'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store],
            }
        })
        expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'})
    })

    test('debe de mostrar la entrada correctamente', () => {
        expect(wrapper.html()).toMatchSnapshot()
        expect(mockRouter.push).not.toHaveBeenCalled()
    })

    test('debe borrar la entrada y salir', async (done) => {
        swal.fire.mockReturnValueOnce(Promise.resolve({isConfirmed: true}))
        wrapper.find('.btn-danger').trigger('click')
        expect(swal.fire).toHaveBeenCalledWith({
            title: '¿Estas seguro/a que quieres borrar esta entrada?',
            text: 'Si deseas continuar perderas el contenido de la entrada.',
            showDenyButton: true,
            confirmButtonText: 'Si, Estoy seguro/a'
        })

        setTimeout(() => {
            expect(store.dispatch).toHaveBeenCalledWith("journal/deleteEntry", "-MqUePtgfaib9tio3XUF")
            expect(mockRouter.push).toHaveBeenCalled()
            done()
        }, 200)
    })
})