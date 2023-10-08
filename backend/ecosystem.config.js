module.exports = {
  apps : [{
    name   : "backend",
    script : "./app.js",
    env: {
        NODE_PORT: "3100",
        PORT: "3000"
    }
  }]
}