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
        { id: 1, title: 'title1', description: 'description 1' },
        { id: 2, title: 'title2', description: 'description 2' },
        { id: 3, title: 'title3', description: 'description 3' },
        { id: 4, title: 'title4', description: 'description 4' },
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
  <div class="container">
    <PostForm @create="createPost" />
    <PostList v-bind:list="list" />
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.container {
  max-width: 650px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
