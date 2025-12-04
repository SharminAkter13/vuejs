<template>
  <div :class="isDark ? 'dark-mode' : 'light-mode'">
    Theme Mode
  </div>
  <div>
    <button @click="toggleDark">
      {{ isDark ? "dark-mode" : "light-mode" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: true
    }
  },
   methods: {
    toggleDark() {
      this.isDark = !this.isDark
    }
  }
}
</script>

<style>
.dark-mode { background: black; color: white; }
.light-mode { background: rgb(238, 195, 195); color: black; }
</style>
