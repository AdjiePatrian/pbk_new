
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about'}">About</router-link> |
    <router-link :to="{ name: 'advice'}">Advice</router-link>
    <div>
      <button class="button1" @click="redirect">Redirect</button>
      <button class="button1"  @click="back">Go back</button>
      <button  class="button1" @click="foward">Go foward</button>
    </div>
  </nav>
  <router-view/>
  
</template>
<script>
  export default{
    methods: {
      redirect(){
        this.$router.push({name: 'home'})
      },
      back(){
        this.$router.go(-1)
      },
      foward(){
        this.$router.go(1)
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.button1{
  margin: 10px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  font-size: 10px;
}
.button1:hover{
  background: #b6aeae;
}
</style>
