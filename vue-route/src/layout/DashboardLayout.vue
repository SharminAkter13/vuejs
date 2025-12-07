<template>
  <div id="main-wrapper" class="dashboard-layout" :class="{ 'menu-toggle': !isSidebarOpen }">
    
    <Navbar @toggle-sidebar="toggleSidebar" />
    
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
import { ref, onMounted } from 'vue'; 
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "DashboardLayout",
  components: { Navbar, Sidebar, Footer },
  setup() {
    // 1. Reactive state for sidebar status. Default true (open).
    const isSidebarOpen = ref(true);

    // 2. Method to toggle the state (called by the Navbar event)
    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    // Expose state and method to the template
    return {
      isSidebarOpen,
      toggleSidebar,
    };
  },
  mounted() {
    // Add the show class to make the dashboard visible
    const mainWrapper = document.getElementById('main-wrapper');
    if(mainWrapper) {
      mainWrapper.classList.add('show');
    }
  }
};
</script>