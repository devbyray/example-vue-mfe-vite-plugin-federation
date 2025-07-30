import mf from '@originjs/vite-plugin-federation'
import base from '@micro/config'
import { defineConfig, mergeConfig } from 'vite'

const port = 5001

export default mergeConfig(
	base(),
	defineConfig({
		server: { port },
		preview: { port },
		plugins: [
			mf({
				name: 'nav',
				filename: 'remoteEntry.js',
				remotes: {
					host: 'http://localhost:5000/assets/remoteEntry.js'
				},
				exposes: {
					'./NavApp': './src/App.vue'
				},
				shared: {
					vue: { singleton: true, eager: true },
					'vue-router': { singleton: true, eager: true }
				}
			})
		]
	})
)
