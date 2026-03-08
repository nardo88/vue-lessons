<script>
export default {
  mounted() {
    console.log(this.$route)
  },
}
</script>

<template>
  <h1>Текущий ID = {{ $route.params.id }}</h1>
</template>

<style></style>
