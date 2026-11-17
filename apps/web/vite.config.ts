import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// Cesium loads its workers, assets and widget CSS at runtime from CESIUM_BASE_URL,
// so they are copied out of node_modules and served as static files.
const cesiumBaseUrl = 'cesiumStatic'

export default defineConfig({
  define: {
    CESIUM_BASE_URL: JSON.stringify(`/${cesiumBaseUrl}`),
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/cesium/Build/Cesium/{Workers,ThirdParty,Assets,Widgets}/**/*',
          dest: cesiumBaseUrl,
          rename: { stripBase: 4 }, // drop node_modules/cesium/Build/Cesium
        },
      ],
    }),
  ],
})
