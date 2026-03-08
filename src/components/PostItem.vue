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
    deleteItem() {
      this.$emit('deleteItem', this.id)
    },
  },
}
</script>

<template>
  <div class="post">
    <div>
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
    <div class="btn_wrapper">
      <Button @click="deleteItem">Удалить</Button>
      <Button @click="$router.push(`/posts/${id}`)">Читать</Button>
    </div>
  </div>
</template>

<style>
.post {
  padding: 16px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.btn_wrapper {
  display: flex;
  gap: 16px;
}
</style>
