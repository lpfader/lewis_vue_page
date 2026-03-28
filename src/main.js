import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'   // ← ADD THIS

createApp(App)
  .use(router)                  // ← AND THIS
  .mount('#app')