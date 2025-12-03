<template>
  <div class="page-content">
    <h1>Home Page</h1>
    <p class="lead-text">Welcome to your Vue 3 app with Router!</p>
    
    <section>
        <p>Welcome To Home Page.</p>
        <p>Start Your Journey.</p>
    </section>
  </div>
</template>

<script setup>
// If you have a script block, keep it here.
</script>

<style scoped>

.page-content {
  padding: 20px 0;
  background-color:#9bc2e9ff;
}

/* Style for the main heading */
h1 {
  font-size: 2.5rem;
  font-weight: 300; 
  color: #0861b9ff; 
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #053769d3; 
}

.lead-text {
  font-size: 1.25rem;
  font-weight: 300;
  color: #01050aff; 
  margin-top: 0;
  margin-bottom: 2rem;
}

section p {
  line-height: 1.6;
  color: #131d27ff;
  margin-bottom: 1rem;
}
</style>