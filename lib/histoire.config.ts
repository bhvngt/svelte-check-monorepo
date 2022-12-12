import {defineConfig} from 'histoire'
import {HstSvelte} from '@histoire/plugin-svelte'

export default defineConfig({
    plugins: [HstSvelte()],
    vite: {
        resolve: {
            alias: {
                "$lib": "./src/lib/",
            }
        },
    },
    viteIgnorePlugins: [
        'vite-plugin-sveltekit-compile',
        'vite-plugin-sveltekit-middleware',
    ],
    setupFile: "./src/routes/histoire.setup.ts",
    autoApplyContrastColor: true,
    tree: {
        groups: [
            {
                id: 'top',
                title: '',
            },
        ],
    },
})
