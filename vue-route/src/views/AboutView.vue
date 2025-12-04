<script>
export default {

  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++
    }
  },
  

  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <div id="app">
  <h1>To Start Count Click The Button-></h1>
     <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<style>
button {
  padding: 10px;
  font-size: 18px;
  background-color:blue;
  color:white;
  font-weight:bold;
}
h1{
  color:green;
  padding:10px;
}
</style>
