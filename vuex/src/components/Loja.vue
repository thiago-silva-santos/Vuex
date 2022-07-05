<template>
  <Painel titulo="Loja Virtual" verde>
    <template v-slot:conteudo>
      <div class="loja">
        <div class="loja-inputs">
          <span>Nome</span>
          <input type="text" v-model="nome" />
        </div>
        <div class="loja-inputs">
          <span>Quantidade</span>
          <input type="number" v-model.number="quantidade" />
        </div>
        <div class="loja-inputs">
          <span>Preço</span>
          <input type="number" v-model.number="preco" />
        </div>
      </div>
    </template>
    <template v-slot:actions>
      <div>
        <button class="button" @click="adicionar">Enviar</button>
      </div>
    </template>
  </Painel>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      sequencia: 1,
      quantidade: 1,
      preco: 10,
    };
  },
  methods: {
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: this.nome,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;
      // eslint-disable-next-line
      //console.log(produto);
      this.$store.state.produtos.push(produto);
    },
  },
  // watch: {
  //   nome(value) {
  //     console.log(value);
  //   },
  // },
};
</script>

<style scoped>
.loja {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 40px;
  flex-direction: column;
  position: relative;
  max-width: 400px;
}

.loja-inputs {
  display: flex;
  flex-direction: column;
  font-size: 24px;
  width: 100%;
  margin-bottom: 10px;
}
.loja-inputs > span {
  text-align: start;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 4px 2px;
}
.loja-inputs > input {
  height: 35px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
}
.button {
  background-color: #4caf50;
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
