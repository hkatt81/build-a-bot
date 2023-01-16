module.exports = {
    configureWebpack: {
        devServer: {
            allowedHosts: [
                'localhost',
                '172.30.97.248',
            ],
            // set proxy to access api with relative links
            proxy: {
                '/api': {
                    target: 'http://localhost:8081',
                    changeOrigin: true,
                },
            },
            // Hot reload hack
            watchOptions: {
                poll: true,
            },
        },
    },
};
