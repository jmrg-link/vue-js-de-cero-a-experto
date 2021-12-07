<template>
  <div class="entry-container mb-3 pointer p-2"
    @click="$router.push( { name: 'entry' , params: { id:10 } } )"
  >
    <!--Title-->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fs-5 fw-light">2021, Jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis cupiditate debitis saepe sapiente tempora! Eaque ex expedita iusto quos. Animi laborum quam quisquam? Ad asperiores molestiae ratione reprehenderit voluptate?
    </div>
  </div>

</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
  .entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
      background-color: lighten($color:grey, $amount: 45) ;
      transition: 0.2s all ease-in;
    }
    .entry-description{
      font-size: 12px;
    }
  }

</style>