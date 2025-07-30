import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import './style.css'
import App from './App.vue'

export function mount(el = '#products-mfe') {
	const router = createRouter({
		history: createWebHistory('/products'),
		routes
	})
	console.log('routes products app: ', routes)
	console.log('element products app: ', el)
	createApp(App).use(router).mount(el)
}

// Standalone mode: if running directly, mount to #app
console.log('PORT: ', window.location.port)
// Mount only if running standalone (not as a micro-frontend)
// Check if running on localhost:5002 (standalone products app)
if (window.location.port === '5002') {
	console.log('Standalone mode detected')
	mount('#app')
}
