module.exports = {
  apps : [
    {
      name   : "backend",
      script : "./backend/app.js",
      env: {
        PORT: "3000"
      }
    },
    {
      name   : "frontend",
      script : "./frontend/server.js",
      env: {
        FRONTEND_PORT: "3001",
        NODE_ENV: "production"
      }
    }
  ]
}