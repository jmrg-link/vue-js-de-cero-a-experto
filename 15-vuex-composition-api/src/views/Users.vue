<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <user-list :users="users"
               v-slot="{user}">
      <h5> {{ user.first_name }} {{ user.lastname }}</h5>
      <span>{{ user.email }}</span>
    </user-list>
  </div>
  <button @click="prevPage">back</button>
  <button @click="nextPage">next</button>
  <span> Página: {{ currentPage }}</span>

</template>

<script>
import useUsers from '../composables/useUsers'
import UserList from '../components/UserList'

export default {
  components: {
    UserList
  } ,
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
About.vue 