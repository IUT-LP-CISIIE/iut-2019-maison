<template>
	<div class="cuisine">
		<h2>Bienvenue dans la cuisine</h2>
		<p>Il y a un frigo.</p>
		<img width="300" src="@/assets/cuisine.jpg">
	</div>
</template>


<script>
export default {
  name: 'Cuisine',
  mounted() {

  	console.log('La cuisine existe');
  
  }
}
</script>


<style>

</style>
