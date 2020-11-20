const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: "babel-loader"
              }
          ]   
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                    options: { minimize: true}
                }
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader'
        },
        {
            test: /\.scss$/,
            use: [
            "style-loader", //3. Inject styles into DOM
            "css-loader", //2. Turns css into commonjs
            "sass-loader" //1. Turns sass into css
            ]
        }
    ]
  }
};