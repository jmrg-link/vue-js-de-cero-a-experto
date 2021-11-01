<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Counter />
    
  </div>
</template>

<script>
import Counter from "@/components/Counter";

export default {
  name: "App",
  components: {
    Counter
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
