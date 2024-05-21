const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
                {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                },
                {
                        test: /\.(png|jpe?g|gif|svg)$/i,
                        use: [
                            'file-loader',
                            {
                                loader: 'image-webpack-loader',
                                options: {
                                    disable: process.env.NODE_ENV !== 'production',
                                },
                            },
                        ],
                }
        ],
    },
};
