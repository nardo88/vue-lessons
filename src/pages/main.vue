<script>
export default {}
</script>
<template>
  <h1>Главная страница</h1>
  <!-- значение из состояния -->
  <div>count = {{ this.$store.state.count }}</div>
  <!-- значение из вычисляемых полей -->
  <div>count x2 = {{ this.$store.getters.getCount }}</div>
  <!-- Вызов функции мутации -->
  <Button @click="this.$store.commit('decrement')">decrement</Button>
  <Button @click="this.$store.commit('increment')">increment</Button>
</template>
