export default {
    adicionarProduto(state, payload) {
        state.produtos.push(payload)
    },
    setQuantidade(state, payload) {
        state.quantidade = payload
    },
    setPreco(state, payload) {
        state.preco = payload
    }
}