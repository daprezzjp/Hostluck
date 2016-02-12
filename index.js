var data = require('../data.json');

exports.view = functions(req, res){
  console.log(data);
  res.render('index');
}
