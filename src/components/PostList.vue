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
}
</script>
<template>
  <PostItem v-for="item of list" :title="item.title" :description="item.description" />
</template>

<style></style>
