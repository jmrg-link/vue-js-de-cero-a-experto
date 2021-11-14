<template >
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection',pokemon.id)">{{ pokemon.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  props:{
    pokemons:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>
/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding:5px;
    margin-bottom: 10px;
    width: 375px;
    font-size:18px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>