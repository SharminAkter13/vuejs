import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

const app = createApp(App)
app.use(router)
app.mount('#app')

// Initialize dropdowns after mount (optional, usually Bootstrap auto handles it)
