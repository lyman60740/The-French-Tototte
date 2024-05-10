const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js", // Point d'entrée actualisé
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Crée des nodes de style à partir des chaînes JS
          "css-loader", // Traduit CSS en CommonJS
          "sass-loader", // Compile Sass en CSS
        ],
      },
    ],
  },
};
