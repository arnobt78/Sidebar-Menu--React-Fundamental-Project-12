/**
 * Vite config: uses the React plugin for JSX, HMR, and fast builds.
 * No env or alias needed for this project.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
