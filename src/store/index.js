import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vp = new VuexPersist({
	key : 'store',
	storage: window.localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
  plugins : [vp.plugin],
  state: {
  	lumiereDuSalonAllumee:false,
  	pieceDuChaton : false
  },
  mutations: {
  	setPieceDuChaton(state, pieceDuChaton) {
  		state.pieceDuChaton = pieceDuChaton;
  	},
  	allumerLumiereDuSalon(state) {
  		console.log(state.lumiereDuSalonAllumee);
  		state.lumiereDuSalonAllumee = !state.lumiereDuSalonAllumee;
  		console.log(state.lumiereDuSalonAllumee);
  	}
  },
  actions: {
  },
  modules: {
  }
})
