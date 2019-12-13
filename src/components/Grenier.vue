<template>
	<div class="grenier">
		<h2>Bienvenue dans le grenier</h2>
		<p>Il y a un sacré bazar.</p>
		<img width="300" src="@/assets/grenier.jpg">
		<p><button @click="chatonTrouve()">
			<img src="@/assets/chaton.jpg" width="100">
		</button></p>
	</div>
</template>


<script>
export default {
  name: 'Grenier',
  methods : {
  	chatonTrouve() {
  		this.$store.commit('setPieceDuChaton','Le grenier');
  		alert('Bien joué !')
  	}
  },
  mounted() {

  	console.log('Le grenier existe');
  
  }
}
</script>


<style>

</style>
