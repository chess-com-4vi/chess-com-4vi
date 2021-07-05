const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.m?ts|tsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]', outputPath: 'fonts/' }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'inline-source-map'
}
