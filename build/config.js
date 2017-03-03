import path from 'path';
import babelrc from '../babel';

const config = {
  babelrc,
  projectRoot: path.join(__dirname, '../'),
  rootPath: path.join(__dirname, '../dist'),
  nodePath: path.join(__dirname, '../node_modules'),
  srcPath: 'src',
  docsPath: 'docs',
  indexPath: 'docs/index.html',
  publicPath: '/',
  assetsPath: 'docs/src/assets',
  env: {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
  },
  server: {
    port: process.env.PORT || '8080'
  }
};

export default config;
