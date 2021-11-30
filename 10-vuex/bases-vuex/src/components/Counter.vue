<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct - Access : {{$store.state.counter.count}}</h2>
  <h2>Computed : {{countComputed}}</h2>
  <button @click="increment">Increment +1</button>
  <button @click="incrementBy">Increment +5</button>
  <button @click="incrementRandomInt" :disabled="isLoading" >Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{count}}</h2>

  <h2>Direct Getters : {{$store.getters['counter/squareCount']}}</h2>
</template>
<script>

import { mapState , mapActions } from 'vuex'

export default {
  //computed: mapState(['count'])
  computed:{
   countComputed(){
     return this.$store.state.counter.count
   },
    ...mapState('counter',['count','lastMutation','isLoading'])
    // ...mapState('counter',{
    //   count: state => state.count,
    //   lastMutation : state => state.lastMutation
    // })
  },
  methods:{
    increment(){
      //this.$store.commit('increment')
      this.$store.commit('counter/increment')
    },
    incrementBy(){
      //this.$store.commit('incrementBy', 5)
      this.$store.commit('counter/incrementBy', 5)
    },
    ...mapActions('counter',['incrementRandomInt'])
    // ...mapActions('counter',{
    //   randomInt : 'incrementRandomInt'
    // })
  }
}
</script>
