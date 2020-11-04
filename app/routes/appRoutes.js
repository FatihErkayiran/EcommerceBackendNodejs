module.exports=function(app){
    var todoList= require('../controller/appController');

    app.route('/shoppers')
    .get(todoList.list_all_shoppers)
    .post(todoList.create_a_shopper);
   
   app.route('/shoppers/:shopperId')
    .get(todoList.read_a_shopper)
    .put(todoList.update_a_shopper)
    .delete(todoList.delete_a_shopper);
    
};