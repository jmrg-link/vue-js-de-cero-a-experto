import { useStore } from "vuex";
import { ref , computed } from "vue";

const useTodos = () => {
    const store = useStore()
    const currentTab = ref( 'all' )

    return {
        currentTab ,
        pending: computed( () => store.getters['pendingTodos'] ) ,
        all: computed( () => store.getters['allTodos'] ) ,
        completed: computed( () => store.getters['completedTodos'] ) ,
        getTodosByTab: computed( () => store.getters['getTodosByTab']( currentTab.value ) ) ,
        // methods
        toggleTodo: ( id ) => store.commit( 'toggleTodo' , id ) ,
        createTodo: ( text ) => store.commit( 'createTodo' , text ) ,
    }

}

export default useTodos