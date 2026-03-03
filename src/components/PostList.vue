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
  mounted() {
    console.log(this.$refs.list[0])
  },
}
</script>

<template>
  <h2>Posts list</h2>
  <PostItem
    ref="list"
    v-for="item of list"
    :id="item.id"
    :title="item.title"
    :description="item.description"
    @deleteItem="deleteItem" />
</template>

<style></style>
