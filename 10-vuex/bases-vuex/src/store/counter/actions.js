import getRandomInt from "../../helpers/getRandomInt";

export const incrementRandomInt = async ( { commit } ) => {
    commit('setLoading', true)
    const rndInt = await getRandomInt()
    commit('incrementBy', rndInt)
    commit('setLoading',false)
}