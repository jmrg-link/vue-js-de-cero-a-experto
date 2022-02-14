//

export const loginUser = ( state , { user , idToken , refreshToken } ) => {
    if ( idToken ) {
        sessionStorage.setItem( 'idToken' , idToken )
        state.idToken = idToken
    }
    if ( refreshToken ) {
        sessionStorage.setItem( 'refreshToken' , refreshToken )
        state.refreshToken = idToken
    }

    state.user = user
    state.status = 'authenticated'
}

export const logOut = ( state ) => {
    state.user = null
    state.idToken = null
    state.refreshToken = null
    state.status = 'not-authenticated'

    sessionStorage.removeItem( 'user' )
    sessionStorage.removeItem( 'idToken' )
    sessionStorage.removeItem( 'refreshToken' )
    sessionStorage.removeItem( 'status' )
}