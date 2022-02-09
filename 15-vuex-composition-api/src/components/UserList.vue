<template>
  <ul>
    <!--<li v-for="user in users" :key="user.id">
      <h5>hola mundo</h5>
    </li>-->
    <slot v-for="user in users"
          :user="user"
          :key="user.id"></slot>
  </ul>
</template>
<script>
import { ref } from 'vue'

export default {
  props: {
    users: {
      type: Array ,
      required: true
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
</style>