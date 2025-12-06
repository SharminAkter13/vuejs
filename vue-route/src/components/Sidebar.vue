<template>
    <div class="quixnav">
        <div class="quixnav-scroll">
            <ul class="metismenu" id="menu">
                <li class="nav-label first">Main Menu</li>
                <li>
                    <a class="has-arrow" aria-expanded="false">
                        <i class="icon icon-single-04"></i><span class="nav-text">Dashboard</span>
                    </a>
                    <ul aria-expanded="false">
                        <li><router-link to="/dashboard">Dashboard View</router-link></li>
                        </ul>
                </li>
                
                <li class="nav-label">Apps</li>
                <li>
                    <a class="has-arrow" aria-expanded="false">
                        <i class="icon icon-app-store"></i><span class="nav-text">Apps</span>
                    </a>
                    <ul aria-expanded="false">
                        <li><router-link to="/contact">Contact</router-link></li>
                        
                        <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Email</a>
                            <ul aria-expanded="false">
                                <li><a href="#">Compose</a></li>
                                <li><a href="#">Inbox</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Calendar</a></li>
                    </ul>
                </li>
                </ul>
        </div>
    </div>
</template>
<script>
export default { name: "Sidebar" }
</script>