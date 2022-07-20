import { createStore } from 'vuex'

export default createStore({
  state: {
    produtos: [
      //   {
      //   id: 1,
      //   nome: "Biscoito",
      //   quantidade: "1",
      //   preco: 10
      // }
    ]
  },
  getters: {
    valorTotal(state) {
      let teste = state.produtos.map((p) => {
        return p.quantidade * p.preco;
      })
      let reduceResult = teste.reduce(function (acumulador, valor) {
        return acumulador + valor
      }, 0).toFixed(2)      
      return reduceResult;
    }
  },
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload)
    }
  },
  actions: {

    adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload)
      }, 1000)
    }
  },
  modules: {
  }
})
