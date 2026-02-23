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
      title: '',
      description: '',
    }
  },
  methods: {
    setTitle(e: any) {
      this.title = e.target.value
    },
    setDescription(e: any) {
      this.description = e.target.value
    },
    submitHandler() {
      this.list.push({
        _id: Date.now(),
        title: this.title,
        description: this.description,
      })

      this.title = ''
      this.description = ''
    },
  },
}
</script>

<template>
  <PostForm v-bind:title="title" />
  <PostList v-bind:list="list" />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.list {
  display: flex;
}
</style>
