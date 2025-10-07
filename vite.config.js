import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    server: {
        hmr: {}
    },
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        tailwindcss(),
        vue(),
    ],
});
