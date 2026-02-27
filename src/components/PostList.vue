<script>
import PostItem from './PostItem.vue'
export default {
  components: {
    PostItem,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    remove(id) {
      this.$emit('remove', id)
    },
  },
}
</script>

<template>
  <h2>Posts list</h2>
  <PostItem v-for="item of list" :id="item.id" :title="item.title" :description="item.description" @remove="remove" />
</template>

<style></style>
