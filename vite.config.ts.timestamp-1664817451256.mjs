// vite.config.ts
import { defineConfig } from "vite";
import solidStyled from "babel-plugin-solid-styled";
import solidStart from "solid-start/vite";
var vite_config_default = defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      }),
      enforce: "pre"
    },
    solidStart({
      babel: {
        plugins: [
          [solidStyled, {}]
        ]
      },
      extensions: [".mdx"],
      hot: false
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemF5ZGVrL0NvZGUvZGVtby1zb2xpZC1zdGFydC1tZHhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy96YXlkZWsvQ29kZS9kZW1vLXNvbGlkLXN0YXJ0LW1keC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvemF5ZGVrL0NvZGUvZGVtby1zb2xpZC1zdGFydC1tZHgvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5cbmltcG9ydCBzb2xpZFN0eWxlZCBmcm9tIFwiYmFiZWwtcGx1Z2luLXNvbGlkLXN0eWxlZFwiXG5pbXBvcnQgc29saWRTdGFydCBmcm9tIFwic29saWQtc3RhcnQvdml0ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0e1xuXHRcdFx0Li4uKGF3YWl0IGltcG9ydChcIkBtZHgtanMvcm9sbHVwXCIpISkuZGVmYXVsdCh7XG5cdFx0XHRcdGpzeDogdHJ1ZSxcblx0XHRcdFx0anN4SW1wb3J0U291cmNlOiBcInNvbGlkLWpzXCIsXG5cdFx0XHRcdHByb3ZpZGVySW1wb3J0U291cmNlOiBcInNvbGlkLW1keFwiLFxuXHRcdFx0fSksXG5cdFx0XHRlbmZvcmNlOiBcInByZVwiLFxuXHRcdH0sXG5cdFx0c29saWRTdGFydCh7XG5cdFx0XHQvLy8vIGFkYXB0ZXI6IFwic29saWQtc3RhcnQtc3RhdGljXCIsXG5cdFx0XHRiYWJlbDoge1xuXHRcdFx0XHRwbHVnaW5zOiBbXG5cdFx0XHRcdFx0W3NvbGlkU3R5bGVkLCB7fV1cblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRleHRlbnNpb25zOiBbXCIubWR4XCJdLFxuXHRcdFx0aG90OiBmYWxzZSxcblx0XHR9KSxcblx0XSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVTLFNBQVMsb0JBQW9CO0FBRXBVLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBRXZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUVSO0FBQUEsTUFDQyxJQUFJLE1BQU0sT0FBTyxtQkFBb0IsUUFBUTtBQUFBLFFBQzVDLEtBQUs7QUFBQSxRQUNMLGlCQUFpQjtBQUFBLFFBQ2pCLHNCQUFzQjtBQUFBLE1BQ3ZCLENBQUM7QUFBQSxNQUNELFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFFVixPQUFPO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQUEsUUFDakI7QUFBQSxNQUNEO0FBQUEsTUFDQSxZQUFZLENBQUMsTUFBTTtBQUFBLE1BQ25CLEtBQUs7QUFBQSxJQUNOLENBQUM7QUFBQSxFQUNGO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
