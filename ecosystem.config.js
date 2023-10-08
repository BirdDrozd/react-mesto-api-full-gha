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
      script : "./frontend/node_modules/react-scripts/scripts/start.js",
      env: {
        PORT: "3001"
      }
    }
  ]
}