import { defineConfig, mergeConfig } from 'vite'
import base from '@micro/config'
import mf from '@originjs/vite-plugin-federation'

const port = 5000

// https://vite.dev/config/
export default mergeConfig(
	base(),
	defineConfig({
		server: { port },
		preview: { port },
		plugins: [
			mf({
				name: 'host',
				filename: 'remoteEntry.js',
				remotes: {
					nav: 'http://localhost:5001/assets/remoteEntry.js',
					products: 'http://localhost:5002/assets/remoteEntry.js'
				},
				// exposes: {
				// 	'./SharedState': './src/shared-state.ts'
				// },
				shared: {
					vue: { singleton: true, eager: true },
					'vue-router': { singleton: true, eager: true }
				}
			})
		]
	})
)
