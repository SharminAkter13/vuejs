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
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            </div>

            <ul class="navbar-nav header-right">
              <li class="nav-item dropdown notification_dropdown">
                <a
                  class="nav-link dz-fullscreen"
                  href="#"
                  @click.prevent="toggleNotifications"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 19C10.5 19.5523 10.9477 20 11.5 20C12.0523 20 12.5 19.5523 12.5 19L10.5 19ZM11.5 2C16.923 2 21 6.134 21 11C21 15.866 16.923 20 11.5 20C6.077 20 2 15.866 2 11C2 6.134 6.077 2 11.5 2ZM11.5 19C11.6033 19 11.7065 18.9953 11.8093 18.9859L12.0229 17.0141C11.8546 17.0289 11.6775 17.0392 11.5 17.0392C11.3225 17.0392 11.1454 17.0289 10.9771 17.0141L11.1907 18.9859C11.2935 18.9953 11.3967 19 11.5 19ZM3.03923 11.5C3.03923 15.3032 6.1968 18.4608 10 18.4608V16.5392C7.26628 16.5392 5.03923 14.3122 5.03923 11.5H3.03923ZM10 18.4608C13.8032 18.4608 16.9608 15.3032 16.9608 11.5H18.9608C18.9608 16.923 14.8278 21 9.4048 21L9.4048 21V19.0392C13.5657 19.0392 17.0226 15.9329 17.0226 11.5L19.0226 11.5C19.0226 17.0504 14.6548 21.4048 11.5 21.4048V20.9608L10 20.9608ZM16.9608 11.5C16.9608 7.6968 13.8032 4.53923 10 4.53923V6.46077C12.7337 6.46077 14.9608 8.68783 14.9608 11.5H16.9608ZM10 4.53923C6.1968 4.53923 3.03923 7.6968 3.03923 11.5H5.03923C5.03923 8.68783 7.26628 6.46077 10 6.46077V4.53923ZM11.5 3.03923C15.3032 3.03923 18.4608 6.1968 18.4608 10H20.4608C20.4608 4.6548 16.1064 0.299591 10.8564 0.299591L10.8564 0.299591V2.26077C14.8841 2.26077 18.0392 5.41589 18.0392 9.5H20.0392C20.0392 4.9496 16.4952 1.29959 11.5 1.29959V3.03923ZM10.8093 3.01413C10.9775 3.0289 11.1454 3.03923 11.3225 3.03923C11.6775 3.03923 11.8546 3.0289 12.0229 3.01413L11.8093 4.98587C11.7065 4.99525 11.6033 5 11.5 5C11.3967 5 11.2935 4.99525 11.1907 4.98587L10.9771 3.01413C11.1454 3.0289 11.3225 3.03923 11.5 3.03923Z"
                      fill="#828282"
                      stroke-width="1.5"
                    />
                  </svg>
                  <div class="notify-count">
                    <span class="heart-dot"></span>
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right p-0 m-0"
                  v-show="notificationsOpen"
                >
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <a href="#">
                        <span class="mr-3 avatar-icon bg-success-lighten-2"
                          ><i class="fa fa-envelope"></i
                        ></span>
                        New message received
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#">
                        <span class="mr-3 avatar-icon bg-warning-lighten-2"
                          ><i class="fa fa-user"></i
                        ></span>
                        2 new users registered
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#">
                        <span class="mr-3 avatar-icon bg-danger-lighten-2"
                          ><i class="fa fa-calendar-check"></i
                        ></span>
                        Meeting has been scheduled
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#">
                        <span class="mr-3 avatar-icon bg-info-lighten-2"
                          ><i class="fa fa-shopping-cart"></i
                        ></span>
                        New order received
                      </a>
                    </li>
                  </ul>
                  <a class="all-notification" href="#">All Notifications</a>
                </div>
              </li>

              <li class="nav-item dropdown header-profile">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  @click.prevent="toggleProfileDropdown"
                >
                 <img class="testimonial-author-img ml-3" src="./assets//images/avatar/1.png" alt="" />
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right p-0 m-0"
                  v-show="profileDropdownOpen"
                >
                  <a href="#" class="dropdown-item ai-icon">
                    <svg
                      id="icon-user"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-primary"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span class="ml-2">Profile </span>
                  </a>
                  <a href="#" class="dropdown-item ai-icon">
                    <svg
                      id="icon-inbox"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-success"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      ></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span class="ml-2">Inbox </span>
                  </a>
                  <a href="#" class="dropdown-item ai-icon">
                    <svg
                      id="icon-logout"
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-danger"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span class="ml-2">Logout </span>
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
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue';

// Define the custom event that this component can emit
const emit = defineEmits(['toggle-sidebar'])

const sidebarOpen = ref(true)
const searchDropdownOpen = ref(false)
const notificationsOpen = ref(false)
const profileDropdownOpen = ref(false)

// The key fix: Emit an event to the parent component (DashboardLayout)
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  // Notify the parent to change the layout class
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