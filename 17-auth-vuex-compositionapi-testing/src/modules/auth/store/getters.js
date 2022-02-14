export const currentState = ( state ) => {
    return state.status
}

export const username = ( state ) => {
    return state.user?.name || '' //retorna state.user.name o un strign vacio
}