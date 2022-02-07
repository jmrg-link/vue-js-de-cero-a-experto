<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>
  <button @click="prevPage">back</button>
  <button @click="nextPage">next</button>
  <span> Página: {{ currentPage }}</span>

</template>

<script>
import useUsers from '../composables/useUsers'

export default {
  setup() {
    const {
            isLoading ,
            errorMessage ,
            prevPage ,
            nextPage ,
            currentPage ,
            users
          } = useUsers()

    return {
      //...useUsers() //destruct useUsers
      isLoading ,
      errorMessage ,
      prevPage ,
      nextPage ,
      currentPage ,
      users
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

h5 {
  font-size: 18px;
  text-decoration: lightseagreen;

}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
  list-style-type: none;
}
</style>