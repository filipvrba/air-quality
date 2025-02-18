export default {server: {proxy: {
  "/api": {
    target: "https://air-quality-cs.vercel.app",
    changeOrigin: true,

    rewrite(path) {
      return path.replace(/^\/api/m, "/api")
    }
  }
}}}