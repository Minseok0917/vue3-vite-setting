import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins:[vue()],
  envPrefix:'VUE_',
  envDir:'./env',
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'./src')
    }
  }
});
