<template>
  <nav id="navBar">
    <h4>JobFinder</h4>   
    <RouterLink :to="{name: 'home-page'}">Home</RouterLink>
    <RouterLink :to="{name: 'login-page'}">Logout</RouterLink>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLayout',
  components: {  },
  setup() {},
})
</script>

<style scoped>
  #navBar{
    align-items: left;
    display: flex;
    flex-direction: row;
    background-color: #2565cc;
  }
  #navBar > *{
    margin: 1rem;
    color: white;
  }
  
</style>