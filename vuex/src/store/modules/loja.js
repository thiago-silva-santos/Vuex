export default {
    namespaced: true,

    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        ADD_PRODUCT({commit}, payload) {
            commit("carrinho/adicionarProduto", payload, { root: true})
        }
    }
}