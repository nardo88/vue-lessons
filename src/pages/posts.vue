<script lang="ts">
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'

interface ISelectItem {
  value: string
  title: string
}

interface IState {
  selectList: ISelectItem[]
  sort: string
}

export default {
  components: {
    PostForm,
    PostList,
  },
  data(): IState {
    return {
      selectList: [
        { value: 'desc', title: 'desc' },
        { value: 'asc', title: 'asc' },
      ],
      sort: 'desc',
    }
  },
  computed: {
    getShow(): boolean {
      return this.$store.state.posts.show
    },
  },
  methods: {
    showModal() {
      this.$store.commit('posts/showModal')
    },
    deleteItem(id: number) {
      this.$store.commit('posts/deletePots', id)
    },
    createPost(post: any) {
      this.$store.commit('posts/addPost', post)
    },
  },
  watch: {
    getShow(val) {
      console.log(val)
    },
  },

  async mounted() {
    this.$store.dispatch('posts/fetchPosts')
  },
}
</script>

<template>
  <div class="container">
    <h2>Страница с постами {{ getShow }}</h2>
    <Button @click="showModal">Создать пост</Button>
    <Selector :options="selectList" v-model:value="sort" />
    <Modal v-show="this.$store.state.posts.show" v-model:show="this.$store.state.posts.show">
      <PostForm @create="createPost" />
    </Modal>
    <PostList
      v-if="this.$store.state.posts.list.length"
      v-bind:list="this.$store.state.posts.list"
      @deleteItem="deleteItem" />
    <h2 v-else>Список постов пуст</h2>
  </div>
</template>

<style scoped>
.container {
  max-width: 650px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
