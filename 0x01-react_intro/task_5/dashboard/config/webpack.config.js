const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
              "file-loader",
              {
                loader: "image-webpack-loader",
                options: {
                  bypassOnDebug: true,
                  disable: true,
                },
              },
            ],
          },
        ],
      },
  };
  