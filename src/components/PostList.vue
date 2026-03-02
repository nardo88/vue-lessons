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
    deleteItem(id) {
      this.$emit('deleteItem', id)
    },
  },
}
</script>

<template>
  <h2>Posts list</h2>
  <PostItem
    v-for="item of list"
    :id="item.id"
    :title="item.title"
    :description="item.description"
    @deleteItem="deleteItem" />
</template>

<style></style>
