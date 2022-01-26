<template>
    <div class="home">
        <h1>Reactive vs Refs</h1>

        <h3>{{ ironman }}</h3>
        <h3>{{ hulk }}</h3>

        <button @click="changeIronman">Ironman</button>
        <button @click="changeHulk">Hulk</button>

        <h3>ironman: {{ ironmanIsAlive }} </h3>
        <h3>hulk: {{ hulkIsAlive }} </h3>

        <button @click="changeStatus">¿Esta vivo?</button>


    </div>
</template>

<script>
import {ref, reactive} from "vue";

export default {
    name: 'Home',
    setup() {
        const ironman = ref({name: 'Tony', age: 50})
        const hulk = reactive({name: 'Bruce', age: 49})
        const ironmanIsAlive = reactive(false)
        const hulkIsAlive = ref(true)

        const changeStatus = () => {
            hulkIsAlive.value = !hulkIsAlive.value
        }

        return {
            ironman,
            hulk,

            ironmanIsAlive,
            hulkIsAlive,

            changeStatus,

            changeIronman: () => {
                ironman.value.name = 'Tony Stark'
                ironman.value.age = 55
            },
            changeHulk: () => {
                hulk.name = 'Bruce Banner'
                hulk.age = 53
            }
        }
    }
}
</script>
