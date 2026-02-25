<script>
import Button from './ui/Button.vue'

export default {
  components: {
    Button,
  },
  methods: {
    createPost() {
      this.$emit('create', { ...this.post, id: Date.now() })
      this.post = {
        title: '',
        description: '',
      }
    },
    remove() {},
    changeTitle(v) {
      this.title = v
    },
  },
  data() {
    return {
      post: {
        title: '',
        description: '',
      },
    }
  },
}
</script>
<template>
  <form @submit.stop.prevent="createPost" class="form">
    <Input type="text" v-model:value="post.title" />
    <Input type="text" v-model:value="post.description" />
    <Button type="submit">add</Button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
