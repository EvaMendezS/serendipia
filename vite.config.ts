import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/serendipia/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'icon.svg',
      ],

      manifest: {
        name: 'Serendipia',

        short_name:
          'Serendipia',

        description:
          'Descubrí algo que no estabas buscando. Aprendé sin caer en el scroll infinito.',

        theme_color:
          '#111827',

        background_color:
          '#f7f3eb',

        display:
          'standalone',

        start_url:
          '/serendipia/',

        scope:
          '/serendipia/',

        icons: [
          {
            src:
              '/serendipia/icon.svg',

            sizes: 'any',

            type:
              'image/svg+xml',

            purpose:
              'any maskable',
          },
        ],
      },

      workbox: {
        globPatterns: [
          '**/*.{js,css,html,svg,png,webp}',
        ],
      },
    }),
  ],
});