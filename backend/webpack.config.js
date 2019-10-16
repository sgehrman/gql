const path = require("path");

module.exports = {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  target: "node",
  module: {
    // https://github.com/ivan-aksamentov/reactlandia-bolerplate-lite/issues/5#issuecomment-413306341
    exprContextCritical: false,
    rules: [
      {
        test: /\.jss$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: "development"
};
