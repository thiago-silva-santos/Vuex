<template>
  <Painel titulo="Resumo" vermelho>
    <template v-slot:conteudo>
      <div class="resumo">
        <span style="color: white"
          >Total: <strong>{{ total }}</strong></span
        >
        <hr />
      </div>
    </template>
    <template v-slot:actions>
      <button class="button">Finalizar!</button>
    </template>
  </Painel>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.getters.valorTotal
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
  width: 33%;
}
.button {
  background-color: #f44336;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  height: 30px;
  width: 80px;
  border-radius: 10px;
  box-shadow: 1px 2px 4px black;
}
</style>
