const path = require("path");

module.exports = {
  // 1️⃣ Entry point
  entry: "./src/index.js",

  // 2️⃣ Output bundle
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  // 3️⃣ Mode
  mode: "development", // or "production"

  // 4️⃣ Module rules (loaders)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource"
      }
    ]
  },

  // 5️⃣ Plugins
  plugins: [],

  // 6️⃣ Dev server (optional)
  devServer: {
    static: "./dist",
    port: 3000,
    open: true
  }
};