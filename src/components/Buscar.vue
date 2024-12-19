<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="form-group mb-3">
            <label>Data:</label>
            <p>{{ dataFormatada }}</p>
          </div>
          <div>
            <button type="button" @click="add" class="btn btn-primary w-100">Proximo</button>
            <button type="button" @click="ant" class="btn btn-primary w-100 mt-2">Anterior</button>
          </div>
          <div class="row g-3 justify-content-center mt-5">
            <Card  
              :titulo="card.title" 
              :texto="card.explanation" 
              :url="card.url" 
            />
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
    import Card from './Card.vue'
    import axios from 'axios'
    import { format } from 'date-fns';
    export default {
      components: {
        Card
        },
        data(){
            return {
              data: new Date(),
              card: {
                title: '',
                explanation: '',
                url: ''
              },
              dataFormatada: format(new Date(), 'yyyy-MM-dd')
            }
        },
        methods: {
          add() {
            this.data.setDate(this.data.getDate() + 1);
            this.dataFormatada = format(this.data, 'yyyy-MM-dd');
            const url = `https://api.nasa.gov/planetary/apod?api_key=sNNgePapKmcBwL5ZfE93pYzM442ICVmKwnOIHKD8&date=${this.dataFormatada}`;
            axios.get(url)
                .then(response => {
                    this.card = response.data  
                })
                .catch(error => {
                console.error('Erro ao buscar os cards:', error)
                })
          },
          ant() {
            this.data.setDate(this.data.getDate() - 1);
            this.dataFormatada = format(this.data, 'yyyy-MM-dd');
            const url = `https://api.nasa.gov/planetary/apod?api_key=sNNgePapKmcBwL5ZfE93pYzM442ICVmKwnOIHKD8&date=${this.dataFormatada}`;
            axios.get(url)
                .then(response => {
                    this.card = response.data  
                })
                .catch(error => {
                console.error('Erro ao buscar os cards:', error)
                })
          }
        },
        mounted() {
          const url = `https://api.nasa.gov/planetary/apod?api_key=sNNgePapKmcBwL5ZfE93pYzM442ICVmKwnOIHKD8&date=${this.dataFormatada}`;
          axios.get(url)
              .then(response => {
                  this.card = response.data  
              })
              .catch(error => {
              console.error('Erro ao buscar os cards:', error)
              })
        }
    }
</script>
  
<style>
    body {
        background-color: #f8f9fa;
    }

    h1 {
        color: #343a40;
    }

    .table {
        background-color: #ffffff;
    } 
    .card {
    width: 100%;

    margin: auto;

    overflow: hidden;
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: bold;
    font-family: Arial, sans-serif;
  }

  .card-body {
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: Arial, sans-serif;
  }
</style>