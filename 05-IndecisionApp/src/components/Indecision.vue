<template>
  <div>
    <h1>IndecisionApp</h1>
    <img v-if="img"  :src="img" alt="bg" />
    <div class="bg-dark"></div>
    <div class="indecision-container">
      <input v-model="question" type="text" placeholder="Realiza una pregunta..." />
      <p>Recuerda terminar con un signo de interrogación <strong>(?)</strong></p>
      <div v-if="isValidQuestion">
        <h2>{{question}}</h2>
        <h1>{{answer}}</h1>
        <!-- <h1>{{answer === 'yes' ? 'Sii!' : 'Noo!'}}</h1> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IndecisionApp",
  data() {
      return {
          question: null,
          answer:null,
          img:null,
          isValidQuestion:false
      }
  },
  methods: {
      async getAnswer(){
          this.answer = 'pensando...'
          const {answer, image} = await fetch('https://yesno.wtf/api').then(response => response.json())
          this.answer = answer === 'yes' ? 'Sii!' : 'Noo!'
          this.img  = image
      }
  },
  watch:{
      question(value){
          this.isValidQuestion = false
          if(!value.includes('?')) return 
          this.isValidQuestion = true
          this.getAnswer()
      }
  }
}
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 5px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>