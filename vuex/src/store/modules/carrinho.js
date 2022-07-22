export default {
    namespaced: true,

    state: {

        produtos: [],
        quantidade: 10,
        preco: 0

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
        },

        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
    actions: {

    }
}