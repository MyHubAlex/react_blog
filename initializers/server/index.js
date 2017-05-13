const path = require('path');

require('app-module-path').addPath(path.join(process.cwd(), 'src'));

require('./globals');

require('babel-core/register');
require.extensions['.css'] = () => {
  return;
};


const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js').default;

const host = 'localhost';
const port = 3000;

const express = require('express');

const appliction = express();

const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');

const compiler = webpack(config);

appliction.use(webpackDev(
  compiler,
  {
    hot: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }
));

appliction.use(webpackHot(compiler));

appliction.set('views', __dirname);
appliction.set('view engine', 'ejs');

appliction.get('*', require('./render').default);

appliction.listen(port, function() {
  console.log('Server on ' + port)
});
