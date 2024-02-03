const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

let options = {
  mode: process.env.NODE_ENV || 'development',
  entry: {},
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'scripts/[name].bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src',
          to: '.',
          globOptions: {
            ignore: ['**/*.ts'],
          },
        },
      ],
    }),
  ],
};

if (options.mode === 'development') {
  options.devtool = 'cheap-module-source-map';
}

module.exports = options;
