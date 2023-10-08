module.exports = {
  apps : [
    {
      name   : "backend",
      script : "./backend/app.js",
      env: {
        NODE_PORT: "3100",
        BACKEND_PORT: "3000"
      }
    },
    {
      name   : "frontend",
      script : "./frontend/server.js",
      env: {
        NODE_PORT: "3101",
        PORT: "3001",
        NODE_ENV: "production"
      }
    }
  ]
}