const { SHARE_ENV } = require('worker_threads');
var Shopper = require('../model/appModel.js');

exports.list_all_shoppers = function(req, res) {
    Shopper.getAllShoppers(function(err, shopper) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', shopper);
    res.send(shopper);
  });
};



exports.create_a_shopper = function(req, res) {
  var new_shopper = new Shopper(req.body);

  //handles null error 
   if(!new_shopper.userName || !new_shopper.password){

            res.status(400).send({ error:true, message: 'Please provide task/status' });

        }
else{
  
  Shopper.createShopper(new_shopper, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
}
}




exports.read_a_shopper = function(req, res) {
    Shopper.getShopperById (req.params.shopperId, function(err, shopper) {
    if (err)
      res.send(err);
    res.json(shopper);
  });
};


exports.update_a_shopper = function(req, res) {
    Shopper.updateById(req.params.shopperId, new Shopper(req.body), function(err, shopper) {
    if (err)
      res.send(err);
    res.json(shopper);
  });
};


exports.delete_a_shopper = function(req, res) {


  Shopper.remove( req.params.shopperId, function(err, shopper) {
    if (err)
      res.send(err);
    res.json({ message: 'Shopper successfully deleted' });
  });
};