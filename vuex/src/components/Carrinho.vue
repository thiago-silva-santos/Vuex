<template>
  <Painel titulo="Carrinho" azul >
    <template v-slot:conteudo>
      <div class="carrinho">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Qtde</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="produto in produtos" :key="produto.nome">
              <td>{{ produto.id }}</td>
              <td>{{ produto.nome }}</td>
              <td>{{ produto.quantidade }}</td>
              <td>{{ produto.preco }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template v-slot:actions >
      <div class="total">
        <span class="notificacao">
          Quantidade: <strong> {{ produtos.length }}</strong>
        </span>
        <span
          >Total: <strong>{{ total }}</strong></span
        >
      </div>
    </template>
  </Painel>
</template>

<script>
export default {
  computed: {
    total() {
      return this.produtos
        .map((p) => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    },
    produtos() {
      return this.$store.state.produtos;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 23%;
}

hr {
  margin-top: 30px;
}
.notificacao {
  margin-right: 5rem;
}

</style>
