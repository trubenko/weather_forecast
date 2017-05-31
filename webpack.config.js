module.exports = {
    entry: "./components/app.js",
    output: {
        path: __dirname + '/public/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/, loader: "css-loader"
            },
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                }
            },

        ]
    },
    devServer: {
        contentBase: './public',
        inline: true,
        historyApiFallback: true,
        port: 8000
    },

};
