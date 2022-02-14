import { useStore } from "vuex";
import { computed } from "vue";

const useAuth = () => {
    const store = useStore()

    const createUser = async ( user ) => {
        return await store.dispatch( 'auth/createUser' , user )
    }

    const loginUser = async ( user ) => {
        return await store.dispatch( 'auth/signInUser' , user )
    }

    const checkAuthStatus = async () => {
        return await store.dispatch( 'auth/checkAuthStatus' )
    }

    const logout = () => {
        // return store.commit( 'auth/logOut' )
        // clean inputs
        store.commit( 'auth/logout' )
        store.commit( 'journal/clearEntries' )
    }

    return {
        createUser ,
        loginUser ,
        checkAuthStatus ,
        logout ,

        //fn
        authStatus: computed( () => store.getters['auth/currentState'] ) ,
        username: computed( () => store.getters['auth/username'] )
    }
}

export default useAuth
