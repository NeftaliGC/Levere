import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	root: path.resolve(__dirname, './src/view'),
	publicDir: path.resolve(__dirname, './public'),
	resolve: {
		alias: {
		'@': path.resolve(__dirname, './src'),
		}
	},
	build: {
		outDir: 'dist',
	},
	server: {
		port: 5173,
	}
})
