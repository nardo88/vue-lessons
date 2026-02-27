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
      show: false,
    }
  },
  methods: {
    createPost(post: any) {
      this.list.push(post)
      this.show = false
    },
    remove(id: string) {
      this.list = this.list.filter((i: any) => i.id !== id)
    },
    showModal() {
      this.show = true
    },
  },
}
</script>

<template>
  <div class="container">
    <h2>Страница с постами</h2>
    <Button @click="showModal">Создать пост</Button>
    <Modal v-show="show" v-model:show="show">
      <PostForm @create="createPost" />
    </Modal>
    <PostList v-if="list.length" v-bind:list="list" @remove="remove" />
    <h2 v-else>Список постов пуст</h2>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

.container {
  max-width: 650px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
