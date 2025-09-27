import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';

const configuration: Configuration = {
  mode: 'development',
  devtool: 'source-map',

  target: 'electron-preload',

  entry: './src/main/preload.ts',

  output: {
    path: path.join(__dirname, '../../.erb/dll'),
    filename: 'preload.bundle.dev.js',
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
};

export default merge(baseConfig, configuration);