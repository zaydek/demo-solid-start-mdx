import { defineConfig } from "vite"

import solidStyled from "babel-plugin-solid-styled"
import solidStart from "solid-start/vite"

export default defineConfig({
	plugins: [
		// @ts-expect-error
		{
			...(await import("@mdx-js/rollup")!).default({
				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "solid-mdx",
			}),
			enforce: "pre",
		},
		solidStart({
			//// adapter: "solid-start-static",
			babel: {
				plugins: [
					[solidStyled, {}]
				],
			},
			extensions: [".mdx"],
			hot: false,
		}),
	],
})
