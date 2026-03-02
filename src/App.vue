<script lang="ts">
import { api } from './components/api'
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

interface IPost {
  id: number
  title: string
  description: string
}

interface ISelectItem {
  value: string
  title: string
}

interface IState {
  list: IPost[]
  show: boolean
  isLoading: boolean
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
      list: [],
      show: false,
      isLoading: false,
      selectList: [
        { value: 'desc', title: 'desc' },
        { value: 'asc', title: 'asc' },
      ],
      sort: 'desc',
    }
  },
  methods: {
    createPost(post: any) {
      this.list.push(post)
      this.show = false
    },
    deleteItem(id: string) {
      this.list = this.list.filter((i: any) => i.id !== id)
    },
    showModal() {
      this.show = true
    },
    async fetchList() {
      try {
        this.isLoading = true
        const { data } = await api.get('/items', {
          params: {
            sortBy: 'title',
            sortOrder: this.sort,
          },
        })
        this.list = data.data
      } catch (error) {
        console.log('error: ', error)
      } finally {
        this.isLoading = false
      }
    },
  },
  watch: {
    list: {
      handler(val: string) {
        console.log('val: ', val)
      },
      deep: true,
    },
    sort(_newVal: string) {
      this.fetchList()
    },
  },
  computed: {
    sortedList() {
      return [...this.list].sort((a, b) => (a.description > b.description ? -1 : 1))
    },
  },
  async mounted() {
    this.fetchList()
  },
}
</script>

<template>
  <div class="container">
    <h2>Страница с постами</h2>
    <Button @click="showModal">Создать пост</Button>
    <Selector :options="selectList" v-model:value="sort" />
    <Modal v-show="show" v-model:show="show">
      <PostForm @create="createPost" />
    </Modal>
    <PostList v-if="list.length" v-bind:list="list" @deleteItem="deleteItem" />
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
