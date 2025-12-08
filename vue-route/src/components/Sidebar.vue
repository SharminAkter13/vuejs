<template>
    <div class="quixnav">
        <div class="quixnav-scroll">
            <ul class="metismenu" id="menu">

                <li class="nav-label first">Main Menu</li>
                
                <li>
                    <router-link to="/" aria-expanded="false">
                        <i class="icon icon-home-1"></i>
                        <span class="nav-text">Dashboard</span>
                    </router-link>
                </li>
                
                <li>
                    <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i class="icon icon-globe-2"></i>
                        <span class="nav-text">Content Pages</span>
                    </a>
                    <ul aria-expanded="false">
                        <li><router-link to="/home">Home</router-link></li> 
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                        <li><router-link to="/theme">Theme</router-link></li>
                    </ul>
                </li>

                <li class="nav-label">Management</li>
                
                <li>
                    <router-link to="/user" aria-expanded="false">
                        <i class="icon icon-users-mm"></i>
                        <span class="nav-text">User List</span>
                    </router-link>
                </li>
                
                <li class="nav-label">Authentication</li>
                
                <li>
                    <router-link to="/login" aria-expanded="false">
                        <i class="icon icon-key"></i>
                        <span class="nav-text">Login</span>
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
export default { name: "Sidebar" }
</script>