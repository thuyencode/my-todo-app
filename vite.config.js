import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  base: '/my-todo-app/'
})
