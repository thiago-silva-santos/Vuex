<template>
  <div class="linha">
    <img alt="Vue logo" src="./assets/logo.png" style="width: 100px; margin: 0 auto"/>
		<h1>Vuex</h1>
		<div class="Container">
			<Loja />
			<Carrinho />
			<Resumo />
		</div>
  </div>
</template>

<script>
import Loja from './components/Loja'
import Carrinho from './components/Carrinho'
import Resumo from './components/Resumo'
import { mapState } from 'vuex';
export default {
  name: "App",
  components: {  Carrinho, Loja, Resumo },
  computed: {

    ...mapState('carrinho', ['quantidade'])
  },
  created(){
    console.log(this.$store)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.Container {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

</style>
