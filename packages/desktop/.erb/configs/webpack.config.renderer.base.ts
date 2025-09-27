import { Configuration } from 'webpack';
import path from 'path';

const configuration: Configuration = {
  target: 'electron-renderer',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
      '@backend': path.resolve(__dirname, '../../backend'),
    },
  },

  node: {
    __dirname: false,
    __filename: false,
  },
};

export default configuration;
