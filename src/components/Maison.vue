<template>
	<div class="maison">
		<h2>Bienvenue dans la maison</h2>
		<p>Faites comme chez vous.</p>
		<img width="300" src="@/assets/maison.jpg">
		<p>
		  <router-link to="/Salon">
		      Salon
		  </router-link>
		</p>
		<p>
		  <router-link to="/Cuisine">
		      Cuisine
		  </router-link>
		</p>
		<p>
		  <router-link to="/Grenier">
		      Grenier
		  </router-link>
		</p>
		<p>
		  <router-link to="/Chambre">
		      Chambre
		  </router-link>
		 </p>


	</div>
</template>


<script>
export default {
  name: 'Maison',
  mounted() {

  	console.log('La maison existe');
  
  }
}
</script>


<style>

</style>
