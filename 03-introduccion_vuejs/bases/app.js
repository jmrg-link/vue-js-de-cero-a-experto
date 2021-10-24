const app = Vue.createApp({
    //template:`
    //    
    //`
    data(){
        return{
            quote : 'i´am batman',
            author:'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(event){
            console.log('hola mundo')
            this.author = 'jmrg'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

    // watch:{}

    
})

app.mount("#app")