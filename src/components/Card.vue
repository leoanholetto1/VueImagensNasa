<template>
  <div class="card my-3 mx-auto" style="width: 100%;  border: none; border-radius: 10px;">
    <div :class="['card-body']" style="padding: 20px; text-align: center;">
      <h5 class="card-title text-black fw-bold"> 
        {{ titulo }}
      </h5>
      <p class="card-text text-black"> 
        {{ texto }} 
      </p>
      <img :src="url"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Card',
    props: {
      titulo: String,
      texto: String,
      url: String,
    },
    methods:{
    },
    computed: {
    }
  }
</script>

<style scoped>
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
