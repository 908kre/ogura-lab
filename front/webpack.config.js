const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 80,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
          use: [
            "style-loader",
            "css-loader?modules",
          ],
      },
    ]
  },
  resolve: {
    alias: {
      '@': '/srv/src',
    },
    extensions: ['*', '.js', '.json']
  }
};
