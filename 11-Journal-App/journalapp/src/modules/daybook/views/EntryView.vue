<template>
<div class="entry-title d-flex justify-content-between p-2 ">
  <div>
    <span class="text-success fs-1 fw-bold">15 </span>
    <span class="mx-1 ds-3">Julio</span>
    <span class="mx-1 fs-4 fw-light">2021, jueves</span>
  </div>
  <div>
    <button class="btn btn-danger mx-2">
      Borrar
      <i class="fa fa-trash-alt"></i>
    </button>

    <button class="btn btn-warning mx-2">
      Subir foto
      <i class="fa fa-upload"></i>
    </button>
  </div>
</div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea
    placeholder=" ¿Que ha sucedido hoy? "
    ></textarea>
  </div>
  <Fab
    icon="fa-save"
  />
  <img
      src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt="entry-picture"
      class="img-thumbnail"
  >
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components:{
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  }
}
</script>
<style lang="scss" scoped>
textarea{
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus{
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  right: 20px;
  bottom: 150px;
  box-shadow: 0 5 10 rgba($color:#000000, $alpha: 0.2);
;
}

</style>