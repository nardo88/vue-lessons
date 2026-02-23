<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
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
</template>
<style></style>
