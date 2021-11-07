import { shallowMount , mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })
    

    test('h2 debe tener el valor por defecto "Counter" ', () => {
        expect(wrapper.find('h2').exists()).toBe(true)
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })

    test('el valor por defecto debe de ser 100 en el "p" ', () => {
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe("100")
    })

    test('debe de incrementar y decrementar en 1 el valor del contador ', async () => {
        
        const[increseBtn , drecreaseBtn ] = wrapper.findAll('button')
        await increseBtn.trigger('click')
        await increseBtn.trigger('click')
        await increseBtn.trigger('click')
        
        await drecreaseBtn.trigger('click')
        await drecreaseBtn.trigger('click')
       
        const value = wrapper.find('[data-testid="counter"]').text()
        expect (value).toBe('101')
        
    })
    
})