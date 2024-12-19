<template>
    <div class="container-fluid p-5">
      <div class="row g-3 justify-content-center">
        <Card  
          :titulo="cards.title" 
          :texto="cards.explanation" 
          :url="cards.url" 
        />
      </div>
    </div>
</template>

<script>
import Card from './Card.vue'
import axios from 'axios'
export default {
    name: 'App',
    components: {
    Card
    },
    data() {
    return {
        cards: []
    }
    },
    mounted() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=sNNgePapKmcBwL5ZfE93pYzM442ICVmKwnOIHKD8')
        .then(response => {
            this.cards = response.data  
        })
        .catch(error => {
        console.error('Erro ao buscar os cards:', error)
        })
    }
}
</script>

<style scoped>
</style>
