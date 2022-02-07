import { ref } from 'vue'
import axios from "axios";

const usePokemon = ( pokemonId = '1' ) => {
    const pokemon = ref()
    const isLoading = ref( false )
    const errMsg = ref()

    const searchPokemon = async ( id ) => {
        if ( !id ) return
        isLoading.value = true
        pokemon.value = null

        try {
            const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon/${ id }` )
            pokemon.value = data
            errMsg.value = null
            //console.log( data )
        } catch ( e ) {
            errMsg.value = `No se pudo cargar el pokemon, ${ id }`
            console.error( e , pokemonId )
        }
        isLoading.value = false
    }

    searchPokemon( pokemonId )
    return {
        pokemon ,
        isLoading ,
        errMsg ,
        searchPokemon ,
    }
}

export default usePokemon