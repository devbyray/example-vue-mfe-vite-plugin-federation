import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'   // factory helpers
import { routes } from 'vue-router/auto-routes'                    // generated routes
import './style.css'
import App from './App.vue'

const router = createRouter({
	history: createWebHistory(),
	routes // plug in the auto-generated routes
})

console.log('routes: ', routes)

createApp(App).use(router).mount('#app')
