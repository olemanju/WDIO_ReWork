const merge = require('deepmerge')
const wdioconf = require('./wdio.conf.js')

exports.config = merge(wdioconf.config,{

    baseUrl: 'https://rahulshettyacademy.com',

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep: "sanity"
    }
})