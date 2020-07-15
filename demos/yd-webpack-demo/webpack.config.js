const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    assetModuleFilename: 'images/[name].[hash:5][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  experiments: {
    mjs: true,
    outputModule: true,
    asyncWebAssembly: true,
    syncWebAssembly: true,
    importAsync: true,
    importAwait: true,
    topLevelAwait: true,
    asset: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/index.html',
    }),
  ],
};
