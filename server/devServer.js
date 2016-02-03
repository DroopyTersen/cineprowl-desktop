var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config');
var router = require("./router");

var app = express();
var compiler = webpack(config);


// HOT RELOADING STUFF
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
// END OF HOT RELOADING


router.setup(app);


app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
