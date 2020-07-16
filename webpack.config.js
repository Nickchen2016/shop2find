const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.vue$/,
            loader: "vue-loader"
          }
        ]
     },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
          },
        extensions: ['*', '.js', '.vue', '.json']
    },
    mode: 'development',
    plugins: [
        new VueLoaderPlugin()
    ]
}