import { createStore } from 'vuex'
import carrinho from './modules/carrinho.js'
import loja from './modules/loja'
import resumo from './modules/resumo'


const store = createStore({
  modules: {
    loja,
    resumo,
    carrinho
  }
})

export default store