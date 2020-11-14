module.exports = {
    apps: [
      {
        name: 'NuxtAppName',
        port:8080,
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }