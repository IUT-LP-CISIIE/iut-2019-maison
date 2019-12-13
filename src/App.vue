<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">
        Revenir dans l'entrée de la Maison
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

    this.$bus.$on('gerer-la-lumiere-du-salon',() => {
        this.$store.commit('allumerLumiereDuSalon');
    });
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
