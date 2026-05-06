module.exports = {
  apps: [
    {
      name: 'mario-bros-vanilla',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};