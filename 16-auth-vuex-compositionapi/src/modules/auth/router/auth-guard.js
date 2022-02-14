import store from "@/store";
import { checkAuthStatus } from "@/modules/auth/store/actions";

const isAuthenticatedGuard = async ( to , from , next ) => {

    const { ok } = await store.dispatch( 'auth/checkAuthStatus' )

    if ( ok ) next()
    else next( { name: 'login' } )
}

export default isAuthenticatedGuard