import authApi from '../../../api/authApi'

export const createUser = async ( { commit } , user ) => {
    const { name , email , password } = user
    try {
        const { data } = await authApi.post( ':signUp' , {
            email ,
            password ,
            returnSecureToken: true
        } )
        const { idToken , refreshToken } = data
        await authApi.post( ':update' , {
            displayName: name ,
            idToken ,
            refreshToken
        } )

        delete user.password // borrar password para no retornarlo ni guardarlo
        commit( 'loginUser' , { user , idToken , refreshToken } )
        return { ok: true }
    } catch ( error ) {
        console.error( 'error code:' , error.response.data.error.code )
        return { ok: false , message: error.response.data.error.message }
    }
}

export const signInUser = async ( { commit } , user ) => {
    const { email , password } = user
    try {
        const { data } = await authApi.post( ':signInWithPassword' , {
            email ,
            password ,
            returnSecureToken: true
        } )
        const { displayName , idToken , refreshToken } = data //traemos el displayName , idToken , refreshToken = data
        user.name = displayName

        commit( 'loginUser' , { user , idToken , refreshToken } )
        return { ok: true }
    } catch ( error ) {
        console.error( 'error code:' , error.response.data.error.code )
        return { ok: false , message: error.response.data.error.message }
    }
}

export const checkAuthStatus = async ( { commit } ) => {
    const idToken = sessionStorage.getItem( 'idToken' )
    const refreshToken = sessionStorage.getItem( 'refreshToken' )

    if ( !idToken ) {
        commit( 'logOut' )
        return { ok: false , message: 'GET: token not found ' }
    }
    try {
        const { data } = await authApi.post( ':lookup' , { idToken } )
        // console.log( data )
        const { displayName , email } = data.users[0] // retorna displayName, email en data.users[0] (el primer usuario del array)
        const user = {
            name: displayName ,
            email
        }
        commit( 'loginUser' , { user , idToken , refreshToken } )
        return { ok: true }

    } catch ( error ) {
        commit( 'logOut' )
        console.error( 'error code:' , error.response.data.error.code )
        return { ok: false , message: error.response.data.error.message }
    }
}