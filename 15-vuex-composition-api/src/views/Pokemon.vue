<template>
  <h1 v-if="!pokemon && !errMsg">Buscando Pokemon...</h1>
  <h2 v-else-if="errMsg">{{ errMsg }}</h2>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name"/>
    <br>
    <router-link :to="{name:'pokemon-search'}">Regresar</router-link>
  </template>
</template>
<script>
import { watch } from 'vue'
import { useRoute , onBeforeRouteLeave } from 'vue-router'
import usePokemon from '../composables/usePokemon'


export default {
  setup() {
    const route = useRoute()
    const {
            pokemon ,
            isLoading ,
            errMsg ,
            searchPokemon
          } = usePokemon( route.params.id )
    watch(
        () => route.params.id ,
        () => searchPokemon( route.params.id )
    )

    onBeforeRouteLeave( () => {
      const answer = window.confirm( '¿Seguro que desea salir?' )
      if ( !answer ) return false // false , block out
    } )
    return {
      errMsg ,
      isLoading ,
      pokemon ,

    }
  }

}
</script>
<style scoped>

</style>