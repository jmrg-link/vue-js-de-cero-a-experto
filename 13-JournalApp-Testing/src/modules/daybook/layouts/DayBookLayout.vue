<template>
  <Navbar />
  <!-- cuando esta cargando -->
  <div v-if="isLoading"
      class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5 ">
      Wait Please...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync "></i>
      </h3>
    </div>
  </div>
  <!-- cuando finaliza la carga -->
  <div v-else
      class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapActions , mapState } from 'vuex'

export default {
  components:{
    Navbar: defineAsyncComponent(()=> import('../components/Navbar') ),
    EntryList: defineAsyncComponent(()=> import('../components/EntryList') )
  },
  methods:{
    ...mapActions('journal',['loadEntries'])
  },
  computed: {
    ...mapState('journal',['isLoading'])
  },
  created() {
    this.loadEntries()
  }
}
</script>