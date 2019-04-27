

module.exports = {
    chainWebpack: function(config) {
        config.module
        .rule('url')
        .test(/\.jpg$/)
        .end()
    }
}