import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';

const configuration: Configuration = {
  mode: 'development',
  devtool: 'source-map',

  entry: {
    main: './src/main/main.ts',
    preload: './src/main/preload.ts',
  },

  output: {
    path: path.join(__dirname, '../../.erb/dll'),
    filename: '[name].bundle.dev.js',
    library: {
      type: 'umd',
    },
  },

  externals: {
    sqlite3: 'commonjs sqlite3',
    typeorm: 'commonjs typeorm',
    'reflect-metadata': 'commonjs reflect-metadata',
  },

  resolve: {
    fallback: {
      fs: false,
      path: false,
      crypto: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
};

export default merge(baseConfig, configuration);