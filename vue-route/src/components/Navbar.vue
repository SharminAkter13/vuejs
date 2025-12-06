<template>
  <div>
    <!-- Nav Header -->
    <div class="nav-header">
      <a href="#" class="brand-logo">
        <img class="logo-abbr" src="/assets/images/logo.png" alt="Logo Abbr" />
        <img class="logo-compact" src="/assets/images/logo-text.png" alt="Logo Compact" />
        <img class="brand-title" src="/assets/images/logo-text.png" alt="Brand Title" />
      </a>

      <div class="nav-control" @click="toggleSidebar">
        <div class="hamburger" :class="{ 'is-active': sidebarOpen }">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="header">
      <div class="header-content">
        <nav class="navbar navbar-expand">
          <div class="collapse navbar-collapse justify-content-between">
            <div class="header-left">
              <!-- Search -->
              <div class="search_bar dropdown">
                <span class="search_icon p-3 c-pointer" @click.stop="toggleSearch">
                  <i class="mdi mdi-magnify"></i>
                </span>
                <div class="dropdown-menu p-0 m-0" v-show="searchDropdownOpen">
                  <form @submit.prevent>
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Search"
                      v-model="searchQuery"
                    />
                  </form>
                </div>
              </div>
            </div>

            <ul class="navbar-nav header-right">
              <!-- Notifications -->
              <li class="nav-item dropdown notification_dropdown">
                <a class="nav-link" href="#" @click.prevent.stop="toggleNotifications">
                  <i class="mdi mdi-bell"></i>
                  <div class="pulse-css"></div>
                </a>
                <div class="dropdown-menu dropdown-menu-right" v-show="notificationsOpen">
                  <ul class="list-unstyled">
                    <li
                      class="media dropdown-item"
                      v-for="(notification, index) in notifications"
                      :key="index"
                    >
                      <span :class="notification.iconClass">
                        <i :class="notification.icon"></i>
                      </span>
                      <div class="media-body">
                        <a href="#">
                          <p><strong>{{ notification.user }}</strong> {{ notification.message }}</p>
                        </a>
                      </div>
                      <span class="notify-time">{{ notification.time }}</span>
                    </li>
                  </ul>
                  <a class="all-notification" href="#">
                    See all notifications <i class="ti-arrow-right"></i>
                  </a>
                </div>
              </li>

              <!-- Profile -->
              <li class="nav-item dropdown header-profile">
                <a class="nav-link" href="#" @click.prevent.stop="toggleProfile">
                  <i class="mdi mdi-account"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" v-show="profileDropdownOpen">
                  <a href="#" class="dropdown-item">
                    <i class="icon-user"></i> <span class="ml-2">Profile</span>
                  </a>
                  <a href="#" class="dropdown-item">
                    <i class="icon-envelope-open"></i> <span class="ml-2">Inbox</span>
                  </a>
                  <a href="#" class="dropdown-item">
                    <i class="icon-key"></i> <span class="ml-2">Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Sidebar toggle
const sidebarOpen = ref(false)
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
  const mainWrapper = document.getElementById('main-wrapper')
  if (mainWrapper) mainWrapper.classList.toggle('menu-toggle', sidebarOpen.value)
}

// Dropdown states
const searchDropdownOpen = ref(false)
const notificationsOpen = ref(false)
const profileDropdownOpen = ref(false)
const searchQuery = ref('')

// Sample notifications
const notifications = ref([
  { iconClass: 'success', icon: 'ti-user', user: 'Martin', message: 'added a customer', time: '3:20 am' },
  { iconClass: 'primary', icon: 'ti-shopping-cart', user: 'Jennifer', message: 'purchased Light Dashboard', time: '3:20 am' },
  { iconClass: 'danger', icon: 'ti-bookmark', user: 'Robin', message: 'marked a ticket as unsolved', time: '3:20 am' },
])

// Toggle dropdowns
function toggleSearch() { searchDropdownOpen.value = !searchDropdownOpen.value; closeOthers('search') }
function toggleNotifications() { notificationsOpen.value = !notificationsOpen.value; closeOthers('notifications') }
function toggleProfile() { profileDropdownOpen.value = !profileDropdownOpen.value; closeOthers('profile') }

// Close other dropdowns
function closeOthers(openDropdown) {
  if (openDropdown !== 'search') searchDropdownOpen.value = false
  if (openDropdown !== 'notifications') notificationsOpen.value = false
  if (openDropdown !== 'profile') profileDropdownOpen.value = false
}

// Close dropdowns when clicking outside
function handleClickOutside(event) {
  const searchMenu = document.querySelector('.search_bar')
  const notificationsMenu = document.querySelector('.notification_dropdown')
  const profileMenu = document.querySelector('.header-profile')

  if (searchDropdownOpen.value && searchMenu && !searchMenu.contains(event.target)) searchDropdownOpen.value = false
  if (notificationsOpen.value && notificationsMenu && !notificationsMenu.contains(event.target)) notificationsOpen.value = false
  if (profileDropdownOpen.value && profileMenu && !profileMenu.contains(event.target)) profileDropdownOpen.value = false
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
.nav-control { cursor: pointer; }
.hamburger { width: 25px; height: 20px; display: flex; flex-direction: column; justify-content: space-between; }
.hamburger .line { background: #333; height: 3px; border-radius: 2px; transition: all 0.3s ease; }
.hamburger.is-active .line:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.is-active .line:nth-child(2) { opacity: 0; }
.hamburger.is-active .line:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
.dropdown-menu { position: absolute; background: white; border: 1px solid #ddd; padding: 0.5rem 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; }
.header-right .nav-item { position: relative; }
</style>
