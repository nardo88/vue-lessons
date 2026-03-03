<script>
export default {
  name: 'Button', // указали name
  props: {
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
    },
  },
}
</script>
<template>
  <button
    v-on:click="click"
    :style="{
      boxShadow: '0 0 5px 5px red',
    }"
    class="button"
    :class="{ disabled }"
    :type="type">
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

.disabled {
  color: gray;
  border: 1px solid gray;
  cursor: default;
}
</style>
