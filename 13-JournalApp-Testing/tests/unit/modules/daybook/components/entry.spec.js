import {shallowMount} from "@vue/test-utils";
import Entry from "@/modules/daybook/components/Entry.vue";
import {journalState} from "../../../mock-data/test-journal-state";

describe("Pruebas en Entry Component", () => {
    const mockRouter = {
        push: jest.fn(),
    };
    const wrapper = shallowMount(Entry, {
        props: {
            entry: journalState.entries[0]
        },
        global: {
            mocks: {
                $router: mockRouter,
            },
        },
    });

    test("debe de hacer match con el snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test("debe de redireccionar al hacer click en el entry-container", () => {
        const entryContainer = wrapper.find('.entry-container') // genero una constante donde llamare al wrapper.find para buscar una clase
        entryContainer.trigger('click') // llamamos a la clase del wrapper y generamos un trigger que dispara el evento click
        expect(mockRouter.push).toHaveBeenCalledWith({ /* espera que : mockRouter.push de (jest.fn) halla sido llamado con algo {toHaveBeenCalledWith}  */
            name: 'entry',
            params: {
                id: journalState.entries[0].id
            }
        })
    })
    test("pruebas en las props computed", () => {
        // console.log(wrapper.vm) puede mostrar las props computed
        expect(wrapper.vm.day).toBe(9) //
        expect(wrapper.vm.months).toBe("Diciembre") //
        expect(wrapper.vm.yearDay).toBe("2021, Jueves") //
    });
});
