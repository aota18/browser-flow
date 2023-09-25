const sql = require("./db.js");

// constructor
const Flow = function(flow) {
  this.id = flow.id;
  this.name = flow.name;
  this.category_id = flow.category_id;
  this.image = flow.image;
  this.type = flow.type;
  this.demo_link = flow.demo_link;
  this.version = flow.version;
  this.featured = flow.featured;
};


Flow.getAll = (name, result) => {
  let query = "SELECT * FROM products";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("flows: ", res);
    result(null, res);
  });
};



module.exports = Flow;