<template>

<Navbar/>

<div class="background">
<router-view/>
</div>



</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
.background {
  background-image: url("./assets/fondo2.png");
  background-color: rgb(70, 37, 104);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
}

</style>
