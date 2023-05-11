<template>
    <div v-for="advice in advices" :key="advice.id" class="advice">
        <router-link :to=" { name:'adviceDetail', params: {id: advice.id} } ">
            <h2>{{ advice.title }}</h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                advices: [
                {title:'First Advice', id: 1, details: 'aja'},
                {title:'Second Advice', id: 2, details: 'aja'},
                {title:'Third Advice', id: 3, details: 'aja'},
                ]
            }   
        }
    }
</script>

<style>
.advice h2{
    background-color: #D6E8DB;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 500px;
    cursor: pointer;
    color: #444;
}
.advice h2:hover{
    background: #afbfb4;
}
</style>