<template>
  <div :class="isDark ? 'dark-mode' : 'light-mode'">
    <h1>Background Theme Change</h1>
    Vue.js, often referred to simply as Vue, is an open-source, progressive JavaScript framework for building user interfaces and single-page applications. Created by Evan You in 2014, it is designed to be approachable, performant, and versatile.
Key characteristics of Vue.js include:
Progressive Framework: Vue can be adopted incrementally. It can be used to enhance specific parts of an existing application or to build a complete single-page application, along with its extensive ecosystem for routing and state management.
Component-Based Architecture: Vue encourages the creation of reusable UI components, promoting modularity and maintainable code.
Declarative Rendering: Developers specify the desired UI based on the application's data state, and Vue efficiently updates the DOM to reflect those changes.
Virtual DOM: Vue utilizes a virtual DOM to optimize updates and changes to the webpage, leading to efficient rendering.
Approachable Learning Curve: Vue is known for its simplicity and ease of learning, particularly for developers familiar with HTML, CSS, and JavaScript. It uses pure HTML-based templates, which can be more intuitive than other frameworks' approaches.
  </div>
  <div>
    <button @click="toggleDark">
      {{ isDark ? "light-mode" : "dark-mode" }}
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
.dark-mode { 
    background: black; 
    color: white; 
    min-height: 50vh; 
    padding: 20px;
}
.light-mode { 
    background: rgb(181, 225, 238); 
    color: black; 
    min-height: 50vh; 
     padding: 20px;
}
</style>
