<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    createPost() {
      this.$emit('create', this.post)
      this.post = {
        title: '',
        description: '',
      }
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
  <form @submit.stop.prevent="createPost">
    <input type="text" v-model="post.title" />
    <input type="text" v-model="post.description" />
    <button type="submit">add</button>
  </form>
</template>

<style></style>
