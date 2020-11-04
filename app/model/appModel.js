var sql = require('./db.js');


var Shopper = function(shopper){
    this.userName = shopper.userName;
    this.password = shopper.password;
    this.repassword = shopper.repassword;
};
Shopper.createShopper = function (newShopper, result) {    
    sql.query("INSERT INTO shoppers set ?", newShopper, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};
Shopper.getShopperById = function (shopperId, result) {
        sql.query("Select * from shoppers where id = ? ", shopperId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Shopper.getAllShoppers = function (result) {
        sql.query("Select * from shoppers", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('shoppers : ', res);  

                 result(null, res);
                }
            });   
};
Shopper.updateById = function(id, shopper, result){
  sql.query("UPDATE shoppers SET password = ? WHERE id = ?", [shopper.password, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Shopper.remove = function(id, result){
     sql.query("DELETE FROM shoppers WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Shopper;