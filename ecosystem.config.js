module.exports = {
  apps : [
    {
      name   : "backend",
      script : "./backend/app.js",
      env: {
        BACKEND_PORT: "3000"
      }
    },
    {
      name   : "frontend",
      script : "./frontend/server.js",
      env: {
        PORT: "3001",
        NODE_ENV: "production"
      }
    }
  ]
}