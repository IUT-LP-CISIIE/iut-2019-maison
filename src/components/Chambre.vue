<template>
	<div class="chambre">
		<h2>Bienvenue dans la chambre</h2>
		<p>Il y a un lit.</p>
		<p><img width="300" src="@/assets/chambre.jpg"></p>
		<button @click="lumiereDuSalon()" type="button">Allumer/éteindre la lumière du salon</button>
	</div>
</template>


<script>
export default {
  name: 'Chambre',
  methods : {
  	lumiereDuSalon() {
		this.$bus.$emit('gerer-la-lumiere-du-salon');
  	}
  },
  mounted() {

  	console.log('La chambre existe');
	console.log(this.$bus);  
  }
}
</script>


<style>

</style>
