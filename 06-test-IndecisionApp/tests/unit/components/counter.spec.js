import { shallowMount , mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', ()=>{
    
    //test('Debe de hacer identico cpn el snapshot ', () => {
    //    const wrapper = shallowMount(Counter)
    //        expect(wrapper.html()).toMatchSnapshot()
    //})

    test('h2 debe tener el valor por defecto "Counter" ', () => {
        const wrapper = shallowMount ( Counter )
        expect(wrapper.find('h2').exists()).toBe(true)
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })
})