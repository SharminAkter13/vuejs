<script>
export default {
  data() {
    return {
      // String text
      message: "Welcome To The Page",

      // Object
      user: {
        name: "John Doe",
        age: 25,
        isAdmin: false
      },

      // Array
      items: ["Apple", "Banana", "Mango"],

      // For ternary example
      isActive: true
    }
  },

  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<template>
  <div>

    <!-- String Text -->
    <h2>Message: {{ message }}</h2>

    <!-- Object -->
    <h3>User Info:</h3>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <p>Role: {{ user.isAdmin ? "Admin" : "Normal User" }}</p>

    <!-- Array Loop -->
    <h3>Fruits List:  {{ items }}</h3>
    
      
   

    <!-- Ternary + Style Example -->
    <button @click="toggleActive">
      {{ isActive ? "Active" : "Inactive" }}
    </button>

    <p :style="{ color: isActive ? 'green' : 'red' }">
      Status: {{ isActive ? "Enabled" : "Disabled" }}
    </p>

  </div>
</template>

<style>
h2, h3 {
  color: blue;
}
</style>
