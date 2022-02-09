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

</template>
<script>
import useTodos from '../composables/useTodos'

export default {
  setup() {
    const {
            pending ,
            currentTab ,
            toggleTodo ,
            getTodosByTab
          } = useTodos()

    return {
      pending ,
      currentTab ,
      toggleTodo ,
      getTodosByTab
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