<!-- eslint-disable -->
<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">New Game</button>
    </template>
  </div>
</template>
<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";
import getPokemonOptions from "../helpers/getPokemonOptions";

//console.log(getPokemonOptions())

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: "",
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
      console.log(this.pokemon);
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId === this.pokemon.id) {
        this.message = `Correcto , ${this.pokemon.name}`;
      } else {
        this.message = `Nooop.. el pokemon era ${this.pokemon.name} `;
      }
      //console.log(pokemonId);
    },
    newGame(){
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon= null
      this.mixPokemonArray()

    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
