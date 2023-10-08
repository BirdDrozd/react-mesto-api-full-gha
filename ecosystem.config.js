module.exports = {
  apps : [
    {
      name   : "backend",
      script : "./backend/app.js",
      env: {
        NODE_PORT: "3000",
        BACKEND_PORT: "3000"
      }
    }
  ]
}