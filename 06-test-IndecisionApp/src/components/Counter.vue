<template>
    <div class="container">
       <h2> {{ customTitle }}</h2>
       <p> {{ counter + start }} <sup>2</sup> = {{squareCounterValue}} </p>
       <button @click="increase">+ 1</button>
       <button @click="decrease">- 1</button>
    </div>
</template>

<script>
export default {
    name:'Contador de Numeros',
    props: {
        title: String,
        start:{
            type:Number,
            default:0,
            // required:true
            validator(value){
                return value >= 0
            }
        }
    } ,

    data(){
        return {
            counter:this.start
        }
    },
    methods: { 
        getSquareValue(){
            const multiploDos = this.counter * this.counter
            return multiploDos 
        },
        increase(){
             this.counter = this.counter + 1
            
        },
        decrease(){
             this.counter = this.counter - 1
            
        }
    },
    computed: {
        squareCounterValue(){
            const multiploDos = this.counter * this.counter
            return multiploDos
            
        },
        customTitle(){
           return this.title || 'Counter'
           
        }
    }
}

</script>

<style scoped>
button{
    background-color: #64BB87;
    border: 1px solid white;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    font-size: 16px;
    margin: 0 5px;
    padding: 2%;
    transition: 0.3s ease-in-out;

}
button:hover{
    border-radius: 2px solid white;
    color: azure;
    font-size: 32px;
    padding: 3%;
    transition: 0.3s ease-in-out;
    
}
</style>