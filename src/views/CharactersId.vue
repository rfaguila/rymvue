<template>

 <div class="container">
    <router-link :to="`/`"><div class="pestaña"><i class="returnicon fa-solid fa-angle-left"></i> <h3 class="return"><strong> Atrás</strong></h3></div></router-link>
      <div class="row">
          <div class="col-12">
              <div class="mycard"> 

                <div class="row">
                    <div class="col-6">
                        <h3 class="character-name mb-4">{{ character.name }}</h3>
                        <hr>
                        <div class="features-div"> 
                            <h3>Id: {{ character.id }}  </h3> 
                        </div>

                        <div class="features-div">
                            <h3>Especie: {{ character.species }}</h3>
                        </div>

                        <div class="features-div">
            
                           <h3>Género : {{ character.gender }}</h3>
                        </div>

                        <div class="features-div"> 
                            <h3>Estado: {{ character.status }}  </h3> 
                        </div>
                        
                        <div class="features-div">
                            <h3 class="location-font">Actualmente está en: {{ character.location.name }}</h3> 
                        </div> 
                    </div>

                    <div class="col-6">
                        <div class="text-center">
                            <img class="img-card" :src="character.image" alt="">
                        </div>
                    </div>
                </div>

              </div>
          </div>
     </div>
 </div>


</template>

<script>
export default {
    data() {
        return {
            character: {}
        }
    },
    
    methods: {
        async showCharacter() {
            try {
                const data = await fetch(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
                const characterData = await data.json();
                this.character = characterData;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    },
    created() {
        this.showCharacter();
    }
}
</script>

<style scoped>

.return {
    position: relative;
    top: -2px;
    left: 65px;
    font-size: 20px;
}

.returnicon {
    position: relative;
    top: 29px;
    left: 55px;
}

hr {
    color: purple;
    border-top: 4px purple;
    width: 500px;
    position: relative;
    top: -30px;
    left: 0px;
}

.container {
    height: 100vh;
}

.mycard {
  background-color: purple;
  border-color: #D2DA4B;
  border-radius: 50px;
  border-style: solid;
  border-width: 5px;
  box-shadow: 0px 20px 40px rgb(26, 25, 25);
  padding: 100px;
  position: relative;
  top: 100px;
  height: 600px;  
}

.character-name {
  font-size: 50px;
  font-weight: 800;
  color: white;
  position: relative;
  top: -20px;  
}

.features-div {
    background-color: #d3da4bd0;
    width: 500px;
    padding: 8px;
    border-radius: 10px;
    margin-top: 5px;
}

.img-card {
    border-radius: 300px;
    height: 400px;
}

.location-font {
    font-size: 25px;
}

.pestaña {
    width: 250px;
    height: 0px;
    border-color: white;
    border-right: 40px solid transparent;
    border-left: 40px solid transparent;
    border-bottom: 60px solid  yellow;
    position:relative;
    top: 100px;
    left: 50px;
}

</style>