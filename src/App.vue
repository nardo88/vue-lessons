<script lang="ts">
export default {
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
  <form @submit.stop.prevent="submitHandler">
    <input type="text" v-bind:value="title" @change="setTitle" />
    <input type="text" v-bind:value="description" @change="setDescription" />
    <button type="submit">add</button>
  </form>
  <div class="list" v-for="item of list">
    <div class="title">{{ item.title }}</div>
    <div class="description">{{ item.description }}</div>
  </div>
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
