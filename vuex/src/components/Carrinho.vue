<template>
  <Painel titulo="Carrinho" azul>
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
    <template v-slot:actions>
      <div class="total">
        <span class="notificacao">
          Quantidade: <strong> {{ produtos.length }}</strong>
        </span>
        <span
          >Total: <strong>{{ valorTotal }}</strong></span
        >
      </div>
    </template>
  </Painel>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters('carrinho', ['valorTotal']),
    ...mapState('carrinho', ["produtos", "quantidade"]),
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  
}

td {
  border-bottom: 1px solid #eee;
  padding: 5px 0px;
}

hr {
  margin-top: 30px;
}
.notificacao {
  margin-right: 5rem;
}
</style>
