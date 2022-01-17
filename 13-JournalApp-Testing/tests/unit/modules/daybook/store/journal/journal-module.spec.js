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

describe('Vuex - Este es el state inicial', () => {
    //basics
    test('este es el estado inicial, debe de tener este state', () => {
        const store = createVuexStore(journalState)
        const {isLoading, entries} = store.state.journal
        expect(isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)
    })

    // mutations
    test('mutation: setEntries', () => {
        const store = createVuexStore({isLoading: true, entries: []})
        store.commit('journal/setEntries', journalState.entries) // arreglo de test-journal-state
        expect(store.state.journal.entries.length).toBe(3)// recorre todos los objetos de entries en test-journal-state
        expect(store.state.journal.entries.isLoading).toBeFalsy() // isLoading tiene que ser false
    })
})