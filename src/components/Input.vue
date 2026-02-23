<script>
export default {
  data() {
    return {
      value: '', // состояние для Input
    }
  },
}
</script>
<template>
  <input type="text" v-model="value" />
</template>

<style scoped></style>
