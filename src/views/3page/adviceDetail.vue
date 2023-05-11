<template>
  <h1> Advice Detail</h1>
  <p>Advice ID is {{id}}</p>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    }
}
</script>

<style>
p{
    font-size: 12px;
}
</style>