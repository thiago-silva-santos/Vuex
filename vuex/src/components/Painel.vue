<template>
  <div class="painel" :style="{ width: width }">
    <div class="cabecalho">
      <span class="titulo">{{ titulo }}</span>
    </div>
    <div class="conteudo">
      <slot name="conteudo"></slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
    },
    notificacao: {
      type: Number,
    },
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
  },
  computed: {
    selectValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped>
.painel {
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 400px;
}

.cabecalho {
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.titulo {
  flex: 1;
  padding: 5px;
}
  .conteudo {
    padding: 10px;
    height: 350px;
    overflow: auto;
  }
.conteudo::-webkit-scrollbar {
  background-color: #aaa;
  width: 0;
}
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.painel[vermelho] .actions, .painel[vermelho] .cabecalho {
  color: #fff;
  background-color: #c62828;
}
.painel[vermelho] .conteudo {
  background-color: #f44336;
}

.painel[verde] .actions, .painel[verde] .cabecalho {
  color: #fff;
  background-color: #2e7d32;
}
.painel[verde] .conteudo {
  background-color: #4caf50;
}

.painel[azul] .actions, .painel[azul] .cabecalho {
  color: #fff;
  background-color: #1565c0;
}
.painel[azul] .conteudo {
  background-color: #2196f3;
}

.painel[laranja] .cabecalho, .painel[laranja] .actions {
  color: #fff;
  background-color: #c58626;
}
.painel[laranja] .conteudo {
  background-color: #e6c532;
}
</style>
