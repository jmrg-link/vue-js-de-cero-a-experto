import {createStore} from "vuex";
import journal from '@/modules/daybook/store/journal'
import {journalState} from "../../../../mock-data/test-journal-state";

const createVuexStore = (initialState) => createStore({
    modules: {
        journal: {
            ...journal, state: {...initialState}
        }
    }
})

describe('Vuex - Pruebas en el Journal Module', () => {
    // Basicas =========================================>
    test('Inicio del state , debe de tener dicho state', () => {
        const store = createVuexStore(journalState)
        const {isLoading, entries} = store.state.journal
        expect(isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)
    })

    // Mutations : setEntries =========================================>
    test('mutation: setEntries', () => {
        const store = createVuexStore({isLoading: true, entries: []})
        store.commit('journal/setEntries', journalState.entries) // arreglo de test-journal-state
        expect(store.state.journal.entries.length).toBe(3)// recorre todos los objetos de entries en test-journal-state
        expect(store.state.journal.entries.isLoading).toBeFalsy() // isLoading tiene que ser false
    })

    //Mutations : updateEntries =========================================>
    test("mutations: updateEntrie", () => {
        const store = createVuexStore(journalState)
        const updatedEntry = {
            id: "-MqU3Rj_sP6Rbm1RS2PG",
            date: 1639051274464,
            text: "hola jest con testing"
        }
        store.commit('journal/updateEntry', updatedEntry)
        const storeEntries = store.state.journal.entries
        expect(store.state.journal.entries.length).toBe(3)
        expect(storeEntries.find(e => e.id === updatedEntry.id)).toEqual(updatedEntry)
    })

    // Mutations : addEntry + deleteEntry =========================================>
    test("mutations: addEntry y deleteEntry", () => {
        const store = createVuexStore(journalState)
        store.commit('journal/addEntry', {id: 'ABC-123', text: 'Hola Jest'})

        // addEntry
        const stateEntries = store.state.journal.entries
        expect(stateEntries.length).toBe(4)
        expect(stateEntries.find(e => e.id === 'ABC-123').id).toBe('ABC-123')
        // deleteEntry
        store.commit('journal/deleteEntry', 'ABC-123')
        const delEntries = store.state.journal.entries
        expect(delEntries.length).toBe(3)
        expect(delEntries.find(e => e.id === 'ABC-123')).toBeFalsy()
    })

    // Getters ================================>
    test("getters: getentriesByTerm && getEntryById", () => {
        const store = createVuexStore(journalState)
        const [entry1, entry2, entry3] = journalState.entries
        expect(store.getters['journal/getEntriesByTerm']('').length).toBe(3)// recorre las entradas - deben tener 3
        expect(store.getters['journal/getEntriesByTerm']('finalizado').length).toBe(1) // recorre las entradas , encuentra palabra finalizado que existe solo en 1 objeto
        expect(store.getters['journal/getEntriesByTerm']('finalizado')).toEqual([entry3]) // destruct arr3 y tiene que ser igual a finalizado
        expect(store.getters['journal/getEntryById']('-MqU3Rj_sP6Rbm1RS2PG')).toEqual(entry1) // destruct arr entry 1 con object :id igual al introducido
    })

    // Actions ================================>
    test("actions: loadEntries", async () => {
        const store = createVuexStore({isLoading: true, entries: []})
        await store.dispatch('journal/loadEntries')
        const storeState = store.state.journal.entries
        expect(storeState.length).toBe(4) // Comprueba que existen 4 entries en firebase, devuelve true si es correcto y pasa el test
    })

    test("actions: updateEntry", async () => {
        const store = createVuexStore(journalState)
        const updatedEntry = {
            id: '-MqU3Rj_sP6Rbm1RS2PG',
            date: 1639051274464,
            picture: 'https://res.cloudinary.com/dqhfairbx/image/upload/v1639063054/iou33dhvmulfbegxl1g7.jpg',
            text: "nueva entrada 200122...",
            nextCamp: true,
            olderCamp: {test: 1}
        }
        await store.dispatch('journal/updateEntry', updatedEntry)
        const storeState = store.state.journal.entries
        expect(storeState.length).toBe(3)
        expect(storeState.find(e => e.id === updatedEntry.id)).toEqual({
            id: '-MqU3Rj_sP6Rbm1RS2PG',
            date: 1639051274464,
            text: "nueva entrada 200122...",
            picture: 'https://res.cloudinary.com/dqhfairbx/image/upload/v1639063054/iou33dhvmulfbegxl1g7.jpg'
        })
    })

    test("actions: createEntry & deleteEntry", async () => {
        const store = createVuexStore(journalState)

        // createEntry
        const newEntry = {
            date: 1639051274464,
            text: "nuevo test de creacion de entrada 200122...",
            picture:'',
        }
        const id = await store.dispatch('journal/createEntry', newEntry)
        expect(typeof id).toBe('string')
        const copyEntries = store.state.journal.entries
        expect(store.state.journal.entries.find(e => e.id === id)).toBeTruthy()

        // deleteEntry
        // borramos el mismo id que creamos anteriormente
        await store.dispatch('journal/deleteEntry', id)
        const delEntries = store.state.journal.entries
        expect(delEntries.find(e => e.id === id)).toBeFalsy()
    })
})