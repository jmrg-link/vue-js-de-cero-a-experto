import { createStore } from 'vuex'

export default createStore( {
    state: {
        todos: [
            { id: '1' , text: 'Recolectar priedad del infinito' , completed: false } ,
            { id: '2' , text: 'Piedra del Alma' , completed: true } ,
            { id: '3' , text: 'Piedra del Poder' , completed: true } ,
            { id: '4' , text: 'Piedra de la realidad' , completed: false } ,
            { id: '5' , text: 'Conseguir nuevos secuaces' , completed: false } ,
        ]
    } ,
    mutations: {
        toggleTodo( state , id ) {
            const todoIdx = state.todos.findIndex( todo => todo.id === id )
            //console.log( todoIdx )
            state.todos[todoIdx].completed = !state.todos[todoIdx].completed
        }
    } ,
    actions: {} ,
    getters: {
        pendingTodos( state , getters , rootState ) {
            return state.todos.filter( todo => !todo.completed )
        } ,
        allTodos: ( state , getters , rootState ) => {
            //console.log( { state , getters , rootState } )
            return state.todos
        } ,
        completedTodos: ( state , getters , rootState ) => {
            return state.todos.filter( todo => todo.completed )
        } ,
        getTodosByTab: ( _ , getters , rootState ) => ( tab ) => {
            switch ( tab ) {
                case 'all':
                    return getters.allTodos
                case 'pending':
                    return getters.pendingTodos
                case 'completed':
                    return getters.completedTodos
            }
        }
    } ,
    modules: {}
} )
