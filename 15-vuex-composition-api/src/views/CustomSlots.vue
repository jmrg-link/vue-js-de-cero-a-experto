<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <modal
      v-if="isOpen"
      title="Hola Mundo"
      otherTitle="Otro titulo"
      @on:close="closeModal">
    <template v-slot:header>
      <h2>Titulo del Modal</h2>
    </template>
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>
    <!--<h2>Titulo del Modal</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <button @click="closeModal">cerrar</button>-->
  </modal>
</template>
<script>
import Modal from '@/components/Modal.vue'
import { ref } from "vue";


export default {
  components: {
    Modal
  } ,
  setup() {
    const isOpen = ref( false )

    return {
      isOpen ,
      openModal: () => isOpen.value = true ,
      closeModal: () => isOpen.value = false
    }
  }
}
</script>
<style scoped>

</style>