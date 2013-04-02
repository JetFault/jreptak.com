var data = require('../data');

exports.index = function(req, res){
  res.render('index', data);
};
