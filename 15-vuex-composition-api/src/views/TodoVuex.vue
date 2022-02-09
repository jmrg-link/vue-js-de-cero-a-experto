<template>
  <h1>Thanos List 📚:</h1>
  <!--<h4>Tareas 📑: {{ $store.state.todos.length }}</h4>-->
  <h4>Tareas pendientes 📑:{{ pending.length }}</h4>
  <!--<p>{{ pending }}</p>-->
  <hr>
  <!--<h4>Todos 📑:{{ all.length }}</h4>-->
  <!--<h4>Completados 📑:{{ completed.length }}</h4>-->
  <button
      :class="{'active' : currentTab ==='all'}"
      @click="currentTab = 'all'"
  >Todos
  </button>
  <button
      :class="{'active' : currentTab ==='pending'}"
      @click="currentTab = 'pending'"
  >Pendientes
  </button>
  <button
      :class="{'active' : currentTab ==='completed'}"
      @click="currentTab = 'completed'"
  >Completados
  </button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id"
          :class="{'completed' : todo.completed === true}"
          @dblclick="toggleTodo(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="isOpen=true">Crear Todo</button>
  <!--crear modal-->
  <modal v-if="isOpen"
         @on:close="isOpen = false">
    <template v-slot:header>
      <h1>Nueva Tarea</h1>
    </template>
    <template v-slot:body>
      <form @submit.prevent="createTodo(newTodoText); isOpen=false">
        <input type="text"
               placeholder="Nueva Tarea"
               v-model="newTodoText">
        <br>
        <br>
        <button type="submit">Crear</button>
      </form>
    </template>
  </modal>
  <!--form
      submit.prevent
      createTodo
      -->


</template>
<script>
import { ref } from 'vue'
import useTodos from '../composables/useTodos'
import Modal from '../components/Modal.vue'

export default {
  components: { Modal } ,
  setup() {
    const {
            pending ,
            currentTab ,
            toggleTodo ,
            getTodosByTab ,
            createTodo

          } = useTodos()

    return {
      pending ,
      currentTab ,
      toggleTodo ,
      getTodosByTab ,
      createTodo ,

      isOpen: ref( false ) ,
      newTodoText: ref( '' )
    }
  }
}
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center
}

ul {
  list-style: none;
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>