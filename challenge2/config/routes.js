//Update the name of the controller below and rename the file.
const items = require("../controllers/items.js")
module.exports = function(app){

  app.get('/', items.index);

  app.get('/cart/:item_name', items.addToCart);
}
