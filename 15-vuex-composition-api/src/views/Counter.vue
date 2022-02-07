<template>
  <h1>Counter view</h1>
  <H2>{{ counter }}</H2>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>


</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  name: 'Counter',
  props: {},
  emits: [],
  setup() {
    const {counter, increase, decrease} = useCounter()

    return {
      counter,
      increase,
      decrease
    }
  },
}
</script>

<style>

</style>