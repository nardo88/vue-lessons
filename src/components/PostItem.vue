<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    remove() {
      this.$emit('remove', this.id)
    },
  },
}
</script>

<template>
  <div class="post">
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
    <Button @click="remove">Удалить</Button>
  </div>
</template>

<style>
.post {
  padding: 16px;
  border: 1px solid gray;
}
</style>
