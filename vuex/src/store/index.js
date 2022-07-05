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
      console.log(teste);
      let reduceResult = teste.reduce(function (acumulador, valor) {
        console.log("acumulados: " + acumulador)
        return acumulador + valor
      }, 10)//.toFixed(2)      
      console.log(reduceResult.toFixed(2));
      console.log(reduceResult)
      return reduceResult.toFixed(2);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
