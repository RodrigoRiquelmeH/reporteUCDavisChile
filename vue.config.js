// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/scss/_variabls.scss";`
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/reporteUCDavisChile/'
        : '/'
};