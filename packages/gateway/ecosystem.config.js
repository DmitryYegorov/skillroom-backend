module.exports = {
    apps: [{
        env: {
            NODE_ENV: 'development',
        },
        envProduction: {
            NODE_ENV: 'production',
        },
        watch: false,
        name: 'gateway',
        cwd: './packages/gateway/',
        script: 'dist/main.js',
        output: '/dev/null',
        error: '/dev/null',
        exp_backoff_restart_delay: 100,
        restart_delay: 5000,
        min_uptime: 10000,
    }],
};