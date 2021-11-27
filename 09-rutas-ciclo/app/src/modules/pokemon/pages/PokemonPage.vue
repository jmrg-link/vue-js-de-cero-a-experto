<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
  </h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
  
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      pokemon: null,
      //id: this.$route.params.id
    };
  },

  created() {
    this.getPokemon();
    //const { id } = this.$route.params
    //console.log(id);
    //this.id = id
    //console.log(this.$attrs);
  },
  methods: {
    async getPokemon() {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
        const pokemon = await fetch(url).then((response) => response.json());
        console.log(pokemon);
        this.pokemon = pokemon;
      } catch (err) {
          console.log(`No existe pokemon con esta id: ${this.id}`);
          this.$router.push('/id')
      }
    },
  },
  watch:{
      id(){
          console.log(this.id);
          this.getPokemon()
      }
  }
};
</script>
