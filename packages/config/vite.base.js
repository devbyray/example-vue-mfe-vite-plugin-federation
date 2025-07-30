// vite.base.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default ({ routesFolder = 'src/pages' } = {}) =>
	defineConfig({
		plugins: [
			VueRouter({ routesFolder }), // file-based routing[3][8]
			Vue(), // must follow VueRouter()[3]
			AutoImport({
				imports: ['vue', 'vue-router'],
				dts: 'src/auto-imports.d.ts'
			}), // auto APIs[27][40]
			Components({
				dirs: ['src/components', '../../packages/ui/src'],
				dts: 'src/components.d.ts'
			}) // auto SFCs[21][24]
		],
		build: { target: 'esnext' }
	})
