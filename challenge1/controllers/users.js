const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.render("index");
  },

  login: function(req, res){
    res.redirect('/', {users: req.session.name})
  }
}
