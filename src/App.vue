<template>
  <div class="container d-flex flex-column justify-content-center align-items-center p-4">
    <div id="topo" class="section d-flex flex-column flex-md-row justify-content-between align-items-center w-100 mb-4">
      <router-link to="Visualizar" class="btn btn-primary btn-lg mb-2 mb-md-0 w-100 w-md-auto">Visualizar</router-link>
      <router-link to="Buscar" class="btn btn-primary btn-lg ms-md-4 w-100 w-md-auto">Buscar</router-link>
    </div>
    <hr>
    <div id="center" class="w-100">
      <router-view></router-view>
    </div>
    <hr>
    <div id="base" class="w-100 text-center mt-3">
      <p>@Leonardo - FIPP</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  @media (max-width: 768px) {
    .section {
      flex-direction: column;
    }

    .btn {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
</style>
