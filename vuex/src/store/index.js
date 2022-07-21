import { createStore } from 'vuex'
import mutations from './modules/mutations'
import state from './modules/state'
import getters from './modules/getters'


export default createStore({
  state,
  getters,
  mutations
})
