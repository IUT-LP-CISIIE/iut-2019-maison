<template>
	<div class="salon">
		<h2>Bienvenue dans le salon</h2>
		<p>Il y a un canapé.</p>
		<p>
			<label>
				<input type="checkbox" v-model="lumiereAllumee"> La lumière est allumée
			</label>
		</p>
		<img width="300" src="@/assets/salon.jpg">
	</div>
</template>


<script>
export default {
  name: 'Salon',
  data() {
  	return {
  		lumiereAllumee:false
  	}
  },
  mounted() {

  	console.log('Le salon existe');
  
  }
}
</script>


<style>
</style>
