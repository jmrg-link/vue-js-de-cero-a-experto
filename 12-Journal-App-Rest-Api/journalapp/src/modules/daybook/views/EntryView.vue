<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2 ">
      <div>
        <span class="text-success fs-1 fw-bold">{{ day }}</span>
        <span class="mx-1 ds-3">{{ month }}</span>
        <span class="mx-1 fs-4 fw-light">{{ yearDay }}</span>
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
        v-model="entry.text"
        placeholder=" ¿Que ha sucedido hoy? "
    ></textarea>
    </div>

    <img
        src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="entry-picture"
        class="img-thumbnail"
    >
  </template>

  <Fab icon="fa-save"/>

</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from 'vuex' //computed
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
  props:{
    id:{
      type:String,
      required: true
    }
  },

  components:{
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },

  methods: {
    loadEntry(){
      const entry = this.getEntryById(this.id)
      if(!entry) return this.$router.push({name:'no-entry'})
      this.entry = entry
      //console.log(entry)
    }
  },
  data(){
    return {
      entry: null
    }
  },
  computed: {
    ...mapGetters('journal',['getEntryById']),
    day(){
      const { day } = getDayMonthYear(this.entry.date)
      return day
    },
    month(){
      const { month } = getDayMonthYear(this.entry.date)
      return month
    },
    yearDay(){
      const { yearDay } = getDayMonthYear(this.entry.date)
      return yearDay
    },

  },

  created() {
    //console.log(this.$route.params.id)
    //console.log(this.id)
    this.loadEntry()
  },

  watch:{
    id(){
      this.loadEntry()
    }
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