<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Страница не найдена</p>
    <p v-if="$route.redirectedFrom">
      11 Вы пытались перейти по адресу: <strong>{{ $route.redirectedFrom[0].toLowerCase() }}</strong>
    </p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    console.log('NotFound route:', this.$route)
  },
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}

.not-found h1 {
  font-size: 3rem;
  color: #ff4757;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
</style>
