/**
 * Vite config: uses the React plugin for JSX, HMR, and fast builds.
 * Strip "use client" from react-router so Vite doesn't warn when bundling.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Strip "use client" directive so bundling doesn't emit warnings (React Router v7)
function stripUseClient() {
  return {
    name: 'strip-use-client',
    transform(code, id) {
      if (id.includes('react-router') && code.includes('"use client"')) {
        return { code: code.replace(/["']use client["'];?\s*/g, ''), map: null }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [stripUseClient(), react()],
})
