const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/todo-app.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
        {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};