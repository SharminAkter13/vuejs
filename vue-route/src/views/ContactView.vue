<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="row page-titles mx-0">
                <div class="col-sm-4 p-md-0">
                    <div class="welcome-text">
                        <h4>Contact List</h4>
                        <p class="mb-0">A directory of all active users in the system.</p>
                    </div>
                </div>
                <div class="col-sm-4 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">App</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Contacts</a></li>
                    </ol>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-3 col-lg-4 col-sm-4" v-for="contact in contacts" :key="contact.id">
                    <div class="card">
                        <div class="card-body contact-card">
                            <div class="card-title text-center">
                                <img :src="contact.image" alt="Profile Image" class="rounded-circle contact-img">
                                <h4 class="mt-3">{{ contact.name }}</h4>
                                <p class="text-muted">{{ contact.title }}</p>
                            </div>
                            
                            <ul class="list-group list-group-flush mt-3">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <i class="fa fa-phone mr-3 text-primary"></i>
                                    <span>{{ contact.phone }}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <i class="fa fa-envelope mr-3 text-warning"></i>
                                    <span>{{ contact.email }}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <i class="fa fa-map-marker mr-3 text-danger"></i>
                                    <span>{{ contact.location }}</span>
                                </li>
                            </ul>

                            <div class="d-flex justify-content-around mt-3">
                                <button class="btn btn-sm btn-outline-info">View Profile</button>
                                <button class="btn btn-sm btn-primary">Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
    </div>
</template>

<script>
export default {
    name: "ContactView",
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: "Alex Smith",
                    title: "Lead Developer",
                    image: "./images/avatar/1.png", // Use local paths from your theme
                    phone: "+1 (555) 123-4547",
                    email: "alex@example.com",
                    location: "New York, USA"
                },
                {
                    id: 2,
                    name: "Jane Doe",
                    title: "Marketing Manager",
                    image: "./images/avatar/2.png",
                    phone: "+1 (555) 987-6543",
                    email: "jane@example.com",
                    location: "London, UK"
                },
                {
                    id: 3,
                    name: "Chris Lee",
                    title: "UI/UX Designer",
                    image: "./images/avatar/3.png",
                    phone: "+1 (555) 321-0987",
                    email: "chris@example.com",
                    location: "Paris, FR"
                },
                {
                    id: 4,
                    name: "Michael Chen",
                    title: "Data Analyst",
                    image: "./images/avatar/4.png",
                    phone: "+1 (555) 444-5555",
                    email: "michael@example.com",
                    location: "Berlin, DE"
                },
            ]
        };
    }
}
</script>

<style scoped>
/* Basic custom styles to complement the theme's classes */
.contact-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border: 3px solid #eee;
}
.contact-card {
    text-align: center;
}
.list-group-item i {
    font-size: 1.1rem;
    width: 20px;
}
</style>