const path = require("path")

module.exports = {
  entry: {
    app: "./src/worker/service-worker.ts",
  },
  output: {
    filename: "sw.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
}
