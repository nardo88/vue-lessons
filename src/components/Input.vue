<script>
export default {
  data() {
    return {
      value: '', // состояние для Input
    }
  },
  methods: {
    setValue(e) {
      this.value = e.target.value
    },
  },
}
</script>
<template>
  <input type="text" @change="title = $event.currentTarget.value" !:value="value" />
</template>

<style scoped></style>
