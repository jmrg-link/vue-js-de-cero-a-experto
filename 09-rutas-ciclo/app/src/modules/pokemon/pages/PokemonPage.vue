<template>
    <h1>Pokemon: <span>#{{ id }}</span></h1>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
           //id: this.$route.params.id
        }
    },

    created() {
        //const { id } = this.$route.params
        //console.log(id);
        //this.id = id
        //console.log(this.$attrs);
    },
}
</script>