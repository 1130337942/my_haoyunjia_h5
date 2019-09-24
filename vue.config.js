

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/pc': {
                target: 'http://testbasic.goodluckplus.com',
                // secure: true,
                changeOrigin: true,
                ws: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            },

        }
    }, 
    
}
