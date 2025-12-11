<template>
  <div>
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

    <div class="header">
      <div class="header-content">
        <nav class="navbar navbar-expand">
          <div class="collapse navbar-collapse justify-content-between">
            <div class="header-left">
              <div class="search_bar dropdown">
                <span class="search_icon p-3 c-pointer" @click.stop="toggleSearch">
                  <i class="mdi mdi-magnify"></i>
                </span>
                <div class="dropdown-menu p-0 m-0" v-show="searchDropdownOpen">
                  <form @submit.prevent>
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </div>
              </div>
            </div>

            <ul class="navbar-nav header-right">

              <!-- Notifications -->
              <li class="nav-item dropdown notification_dropdown">
                <a class="nav-link dz-fullscreen" href="#" @click.prevent="toggleNotifications">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M10.5 19C10.5 19.5523 10.9477 20 11.5 20C12.0523 20 12.5 19.5523 12.5 19L10.5 19ZM11.5 2C16.923 2 21 6.134 21 11C21 15.866 16.923 20 11.5 20C6.077 20 2 15.866 2 11C2 6.134 6.077 2 11.5 2Z"
                      fill="#828282"
                      stroke-width="1.5"
                    />
                  </svg>
                  <div class="notify-count"><span class="heart-dot"></span></div>
                </a>

                <div class="dropdown-menu dropdown-menu-right p-0 m-0" v-show="notificationsOpen">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <a href="#"><span class="mr-3 avatar-icon bg-success-lighten-2"><i class="fa fa-envelope"></i></span>New message received</a>
                    </li>
                    <li class="list-group-item">
                      <a href="#"><span class="mr-3 avatar-icon bg-warning-lighten-2"><i class="fa fa-user"></i></span>2 new users registered</a>
                    </li>
                    <li class="list-group-item">
                      <a href="#"><span class="mr-3 avatar-icon bg-danger-lighten-2"><i class="fa fa-calendar-check"></i></span>Meeting has been scheduled</a>
                    </li>
                    <li class="list-group-item">
                      <a href="#"><span class="mr-3 avatar-icon bg-info-lighten-2"><i class="fa fa-shopping-cart"></i></span>New order received</a>
                    </li>
                  </ul>
                  <a class="all-notification" href="#">All Notifications</a>
                </div>
              </li>

              <!-- Profile -->
              <li class="nav-item dropdown header-profile">
                <a class="nav-link" href="#" @click.prevent="toggleProfileDropdown">
                  <img class="testimonial-author-img ml-3" src="/assets/images/avatar/1.png" alt="User" />
                </a>

                <div class="dropdown-menu dropdown-menu-right p-0 m-0" v-show="profileDropdownOpen">
                  <a href="#" class="dropdown-item ai-icon">
                    <svg class="text-primary" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    </svg>
                    <span class="ml-2">Profile</span>
                  </a>

                  <a href="#" class="dropdown-item ai-icon">
                    <svg class="text-success" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span class="ml-2">Inbox</span>
                  </a>

                  <a href="#" class="dropdown-item ai-icon">
                    <svg class="text-danger" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span class="ml-2">Logout</span>
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
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue'

const emit = defineEmits(['toggle-sidebar'])

const sidebarOpen = ref(true)
const searchDropdownOpen = ref(false)
const notificationsOpen = ref(false)
const profileDropdownOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  emit('toggle-sidebar')
}

const toggleSearch = () => {
  searchDropdownOpen.value = !searchDropdownOpen.value
}

const toggleNotifications = () => {
  notificationsOpen.value = !notificationsOpen.value
}

const toggleProfileDropdown = () => {
  profileDropdownOpen.value = !profileDropdownOpen.value
}

const handleClickOutside = (event) => {
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
</style>
