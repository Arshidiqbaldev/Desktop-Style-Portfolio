import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                services: 'services.html',
                projects: 'projects.html',
                skills: 'skills.html',
                contact: 'contact.html',
            },
        },
    },
})