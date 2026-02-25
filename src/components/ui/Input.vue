<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    },
  },
}
</script>

<template>
  <input class="input" :value="value" @input="updateInput" />
</template>

<style scoped>
.input {
  padding: 6px 12px;
  border: 1px solid gray;
  border-radius: 4px;
}
</style>
