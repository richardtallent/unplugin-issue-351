// eslint-disable-next-line import/no-nodejs-modules
import path from "path";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueMacros from "unplugin-vue-macros";

export default defineConfig({
	plugins: [
		VueMacros.vite({
			plugins: {
				vue: Vue(),
			},
		}),
	],
	resolve: {
		alias: {
			// Put the @ as the root to make it easier to import from erm-vue and erm-design
			"@": path.resolve(__dirname, "./src/"),
			// Enables runtime component compilation using vue3-runtime-template
			vue: "vue/dist/vue.esm-bundler.js",
		},
	},
});
