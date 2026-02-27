<script>
export default {
  name: 'Button', // указали name
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>
<template>
  <button v-on:click="click" class="button" :type="type">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  width: fit-content;
  padding: 5px 16px;
  margin-left: auto;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #16b0ec;
  color: #16b0ec;
  font-style: 16px;
  text-transform: uppercase;
}
</style>
