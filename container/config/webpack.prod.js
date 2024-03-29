const {merge }= require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
     
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${process.env.MARKETING_HOST}marketing/latest/remoteEntry.js`,
                auth: `auth@${process.env.MARKETING_HOST}auth/latest/remoteEntry.js`,
                dashboard: `dashboard@${process.env.MARKETING_HOST}dashboard/latest/remoteEntry.js`

            },
            shared: packageJson.dependencies
        })
    ],

}  

module.exports = merge(commonConfig, prodConfig);