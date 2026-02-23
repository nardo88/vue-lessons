<script lang="ts">
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      list: [
        { _id: 1, title: 'title1', description: 'description 1' },
        { _id: 2, title: 'title2', description: 'description 2' },
        { _id: 3, title: 'title3', description: 'description 3' },
        { _id: 4, title: 'title4', description: 'description 4' },
      ],
    }
  },
  methods: {
    createPost(post: any) {
      this.list.push(post)
    },
  },
}
</script>

<template>
  <PostForm v-bind:title="title" @create="createPost" />
  <PostList v-bind:list="list" />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
