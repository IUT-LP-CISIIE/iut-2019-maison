<template>
	<div class="chambre">
		<h2>Bienvenue dans la chambre</h2>
		<p>Il y a un lit.</p>
		<img width="300" src="@/assets/chambre.jpg">
	</div>
</template>


<script>
export default {
  name: 'Chambre',
  mounted() {

  	console.log('La chambre existe');
  
  }
}
</script>


<style>

</style>
