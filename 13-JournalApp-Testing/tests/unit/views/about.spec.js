import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue"

describe("Pruebas en el About.vue", () => {
    test('Debe de renderizar el componente correctamente', () => {
        const wrapper = shallowMount(About)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
