// Import the necessary dependencies
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/app.css';

// Create a new Vue application instance
const app = createApp(App)

// Register the router instance with the Vue application
app.use(router)

// Mount the Vue application to the DOM
app.mount('#app')
