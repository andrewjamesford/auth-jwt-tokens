import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
	server: {
		port: Number.parseInt(process.env.VITE_PORT) || 4001,
		host: true,
		strictPort: true,
		hmr: {
			port: 4010,
		},
		watch: {
			usePolling: true,
		},
	},
	plugins: [react()],
});
