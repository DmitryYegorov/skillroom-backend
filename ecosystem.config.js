const modules = require('./ecosystem.modules');

const base = {
  watch: true,
  watch_options: {
    followSymlinks: false
  },
  env: {
    NODE_ENV: 'development'
  },
  envProduction: {
    NODE_ENV: 'production'
  },
  exp_backoff_restart_delay: 500,
  restart_delay: 5000,
  min_uptime: 10000
};

module.exports = {
  apps: modules.map((moduleInfo) => {
    const config = {
      ...base,
      name: moduleInfo.name,
      script: 'dist/main.js',
      cwd: `./packages/${moduleInfo.package}`,
      node_args: []
    };

    return config;
  })
};
