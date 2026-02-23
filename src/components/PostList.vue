<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>
<template>
  <div class="list" v-for="item of list">
    <div class="title">{{ item.title }}</div>
    <div class="description">{{ item.description }}</div>
  </div>
</template>
<style></style>
