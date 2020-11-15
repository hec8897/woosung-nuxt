module.exports = {
    apps: [
      {
        name: 'woosung',
        exec_mode: 'cluster',
        port:8080,
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }