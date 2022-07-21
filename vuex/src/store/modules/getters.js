export default {
    valorTotal(state) {
        let teste = state.produtos.map((p) => {
            return p.quantidade * p.preco;
        })
        let reduceResult = teste.reduce(function (acumulador, valor) {
            return acumulador + valor
        }, 0).toFixed(2)
        return reduceResult;
    }
}