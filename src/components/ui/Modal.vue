<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  methods: {
    updateShow() {
      this.$emit('update:show', false)
    },
  },
}
</script>
<template>
  <div class="overlay" v-show="show" @click="updateShow">
    <div class="content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<style>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  border-radius: 12px;
  background: white;
  padding: 20px;
}
</style>
