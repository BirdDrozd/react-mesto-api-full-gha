module.exports = {
  apps : [{
    name   : "frontend",
    script : "./node_modules/react-scripts/scripts/start.js",
    env: {
      NODE_PORT: 3101,
      PORT: 3001
    }
  }]
}