<script>
export default {
  props: {
    options: {
      type: Array,
    },
    value: {
      type: String,
    },
  },
  methods: {
    onChange(event) {
      this.$emit('update:value', event.target.value)
    },
  },
}
</script>
<template>
  <select class="select" @change="onChange" :value="value">
    <option class="option" v-for="item of options">{{ item.title }}</option>
  </select>
</template>
<style>
.select {
  padding: 12px;
  outline: none;
  cursor: pointer;
}
.option {
  padding: 30px 12px;
}
</style>
