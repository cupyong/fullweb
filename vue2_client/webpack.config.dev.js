var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    devtool: 'eval-source-map',
    debug: true,
    entry: [
        './vue2_client/src/main'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: "",
            template: path.join(__dirname, './src/index.html'),
            inject: true
        }),
        // new HtmlWebpackPlugin({
        //     favicon: path.join(__dirname, 'src/favicon.ico'),
        //     title: "",
        //     template: path.join(__dirname, 'src/index.html'),
        //     inject: true
        // }),
        new ExtractTextPlugin('style.css', { allChunks: true })
    ],
    module: {
        // preLoaders: [
        //     { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
        // ],
        loaders: [
            { test: /\.vue$/, loader: 'vue', include: path.join(__dirname, 'src') },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') },
            // { test: /\.(jpe?g|png|gif)$/i, loaders: [
            //   'url?limit=10000&name=images/[hash:8].[name].[ext]',
            //   'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            // ]},
            // { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'}
            ,
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
            // {
            //   test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            //   loader: 'file-loader'
            // },
            // {
            //   test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            //   loader: 'file-loader',
            //   query: {
            //     name: '[name].[ext]?[hash]'
            //   }
            // }

        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    // eslint: {
    //     configFile: './.eslintrc.json'
    // },
    resolve: {
        root: path.resolve(__dirname, 'node_modules'),
        extensions: ['', '.js', '.vue', '.scss']
    },
    devServer: {
        contentBase: path.resolve(__dirname, '.'),
        port: 8885,
        host: '0.0.0.0',
        historyApiFallback: true,
    }
}