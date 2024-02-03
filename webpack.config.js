const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

let options = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    content_script: path.join(__dirname, 'src', 'scripts', 'content_script.ts'),
    options: path.join(__dirname, 'src', 'scripts', 'options.ts'),
    popup: path.join(__dirname, 'src', 'scripts', 'popup.ts'),
    service_worker: path.join(__dirname, 'src', 'scripts', 'service_worker.ts'),
  },
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
  options.watch = true;
}

module.exports = options;
