import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dns from 'dns';

// Evita problemas de resolución de 'localhost'
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react()],
  server: {
    // host: true,            // escucha en todas las interfaces (incluido túnel ngrok)
    host: 'localhost',       // solo escucha en 'localhost'
    port: 5173,
    // allowedHosts: true,    // permite conexiones desde cualquier subdominio ngrok
    allowedHosts: ['localhost'], // solo permite 'localhost'
    // hmr: {
    //   clientPort: 443      // habilita HMR a través de HTTPS (ngrok usa puerto 443)
    // }
  }
});
