<template>
	<div class="maison">
		<h2>Bienvenue dans la maison</h2>
		<h3>Mais où est-le chaton ? </h3>
		
		<template v-if="$store.state.pieceDuChaton">
			<p>Le chaton est dans : {{ $store.state.pieceDuChaton }} ✔️</p>
			<button @click="recommencerJeu()">Recommencer</button>
		</template>
		<template v-else>Je ne sais pas 🤷‍♂️</template>

		<p><img width="300" src="@/assets/maison.jpg"></p>
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
  methods : {
  	recommencerJeu() {
  		this.$store.commit('setPieceDuChaton', false)
  	}
  },
  mounted() {

  	console.log('La maison existe');

  }
}
</script>


<style>

</style>
