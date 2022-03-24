<template>
<Header/>

<div class="container">
    <div class="row">

        <Finder/>

        <div>
        <h1>Lista de personajes</h1> 
        <hr>
        </div>        

            <!-- {{characters.results}}  ///   {{  personajes.(información requerida)  }}  -->
            <div class="col-3 mt-5 mb-5 d-flex justify-content-around" v-for="(character, index) of characters" :key="index">
                <router-link :to="`/characters/${character.id}`">
                    <div class="mycard text-center">
                        <img class="imgCard" :src="character.image" alt="">
                        <h3 class="character-name">{{character.name}}</h3>

                        <span v-if="character.species === 'Human'" class="dogreen"></span>
                        <span v-else class="dotblue"></span>

                        <h3 class="character-species"> {{character.species}}</h3>
                        <h3 class="character-origin">{{character.origin.name}}</h3>
                        <br>                    
                    </div>
                </router-link>
            </div>
    </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Finder from '../components/Finder.vue'
import Error404 from '../components/Error404.vue'

export default {
    // name: 'Characters',
    components: {
      Header,
      Finder

    },
    data() {
        return {
            characters: []
        }
    },
    methods: {
        async consumirCharacters() {
            try {
              const data = await fetch('https://rickandmortyapi.com/api/character');
              const charactersData = await data.json();
              this.characters = charactersData.results;
              console.log(this.characters);
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    },
    computed: {
        getColorSpecies() {
            if(character.species === "human") {

            }
        }
    },
    created() {
        this.consumirCharacters();
    }
}
</script>

<style scoped>

h1 {
    font-size: 40px;
    font-weight: 800;
    color: rgb(255, 255, 255);
    display: inline;
}

hr {
    color: greenyellow;
    border-top: 4px solid greenyellow;
    width: 880px;
    position: relative;
    top: -35px;
    left: 399px;
}

h3 {
    color: white;
    font-size: 20px;
}

a {
    color: white;
    text-decoration: none;
}

.character-name {
    font-weight: 800;
}

.dotgreen {
  height: 17px;
  width: 17px;
  background-color: rgb(6, 192, 6);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  left: -5px;
}

.dotblue {
  height: 17px;
  width: 17px;
  background-color: #0A95AC;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  left: -5px;
}

.character-species {
    display: inline-block;
    font-size: 19px;
    font-weight: light;
}

.character-origin {
    font-size: 19px;
}

.imgCard {
    width: 150px;
    border-radius: 100px;
    position: relative;
    top: -35px;
}

.mycard {
    background-color: #16abc9a1;
    border-color: #D2DA4B;    
    border-radius: 10px;
    border-style: solid;
    border-width: 5px;
    box-shadow: 0px 20px 40px rgb(26, 25, 25);
    height: 360px;
    padding: 10px;
    width: 280px;
}

div .container {
    padding: 20px;
}
</style>