<template>
  <div id="main-wrapper" class="dashboard-layout">
    <Navbar />
    
    <Sidebar />

    <div class="content-body">
      <main class="container-fluid">
        <router-view />
      </main>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
// Import ref and reactive functions for component-based logic
// import { ref } from 'vue'; 

export default {
  name: "DashboardLayout",
  components: { Navbar, Sidebar, Footer },
   mounted() {
    // Add the show class to make the dashboard visible
    const mainWrapper = document.getElementById('main-wrapper');
    if(mainWrapper) {
      mainWrapper.classList.add('show');
    }
  }
  
};
</script>