import daybookRouter from '@/modules/daybook/router/index.js'

describe('Pruebas en el router module del Daybook', () => {
    test('El router debe de tener configuracion Custom correcta', async () => {
        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function),
                    props: expect.any(Function)
                }
            ]
        })
        //expect(( await daybookRouter.children[0].component()).default.name ).toBe(`NoEntrySelected`)
        //expect(( await daybookRouter.children[1].component()).default.name ).toBe(`EntryView`)
        const promiseRoutes = [] // Guardaremos en promiseRouter el objeto name del arr children
        daybookRouter.children.forEach(child => promiseRoutes.push(child.component())) // recorremos daybookRouter.children con un forEach y añadimos child.component
        const routes = (await Promise.all(promiseRoutes)).map( r => r.default.name ) // en routes llamamos async Promise.All de cada elemento que recorra el arr generamos un nuevo arr con los datos de default.name
        //console.log(routes) // routes : [ 'NoEntrySelected', 'EntryView' ]
        expect( routes ).toContain('EntryView' && 'NoEntrySelected') // tiene que contener .toContain("value" && "value")

    })

    test('debe de retornar  el id de la ruta', () => {
        const route = {
            params: {
                id: '123'
            }
        }
        //expect( daybookRouter.children[1].props(route) ).toEqual({id: '123'})
        const entryRoute = daybookRouter.children.find( route => route.name === 'entry' )
        console.log(entryRoute)
        expect( entryRoute.props(route) ).toEqual({id: '123'})
    })
})