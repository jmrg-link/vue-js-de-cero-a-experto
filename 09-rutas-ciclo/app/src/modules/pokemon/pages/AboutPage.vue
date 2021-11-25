<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{name}}</h2>
    <button @click="onChangeName">Nombre Completo</button>
</template>

<script>
export default {
    data() {
        return {
            name:'Jesus',
        }
    },
    methods: {
        onChangeName(){
            console.log('Se cambiara el nombre completo');
            this.name = "Jesus Maria"
            console.log(this.name);
        }
    },
    beforeCreate() {
        
    console.log('beforeCreate')    
    },
    created() {
    this.name = 'Jesus Rico'
    console.log('created')    
    // Solicitudes Http
    },
    beforeMount() {
    console.log('beforeMount')    
    },
    mounted() {
    console.log('mounted')    
    },
    beforeUpdate() {
    console.log('beforeUpdate')    
    },
    updated() {
    console.log('updated')    
    },
    activated() {
    console.log('activated')    
    },
    deactivated() {
    console.log('deactivated')    
    },
    beforeUnmount() {
    console.log('beforeUnmount')    
    },
    unmounted() {
    console.log('unmounted')    
    },
    errorCaptured(){
    console.log('errorCaptured')    
    },
    renderTracked() {
    console.log('renderTracked')    
    },
    renderTriggered() {
    console.log('renderTriggered')    
    },

}
</script>