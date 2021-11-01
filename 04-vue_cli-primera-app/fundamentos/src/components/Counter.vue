<template>
    <div>
       <h2> Counter</h2>
       <p> {{counter}} <sup>2</sup> = {{squareCounterValue}} </p>
    </div>
</template>

<script>
export default {
    name:'Contador de Numeros',
    data(){
        return {
            counter:5
        }
    },
    methods: { 
        getSquareValue(){
            const multiploDos = this.counter * this.counter
            return multiploDos 
        }
    },
    computed: {
        squareCounterValue(){
            const multiploDos = this.counter * this.counter
            return multiploDos
            
        }
    }
}

</script>

<style scoped>
    
</style>