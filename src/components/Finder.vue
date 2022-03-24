<template>
  <div class="d-flex justify-content-center mt-5 mb-5">
    <input type="text" placeholder="Encuentra el personaje"><i class="img-fluid fa-solid fa glass"></i>

  </div>

</template>

<script>

export default {
  
}






</script>

<style scoped>

::placeholder {
  color: rgb(28, 28, 28);
}

input {
  background-color: rgba(0, 87, 158, 0.698);
  border: none;
  border-radius: 5px;
  color: red;
  font-size: 25px;
  height: 70px;
  width: 1300px;
}

input[type=text] {
  width: 100%;
  padding: 12px 15px;
  margin: 8px 0;
  box-sizing: border-box;
  background: '../assets/fondo2.png'; 
}

i {
  font-size: 35px;
  color: rgba(190, 190, 190, 0.685);
  position:absolute;
  top: 635px;
  right: 325px;
}


</style>