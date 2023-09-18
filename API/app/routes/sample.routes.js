module.exports = app => {
    const samples = require("../controllers/sample.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", samples.create);
  
    // Retrieve all Tutorials
    router.get("/", samples.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", samples.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", samples.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", samples.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", samples.delete);
  
    // Delete all Tutorials
    router.delete("/", samples.deleteAll);
  
    app.use('/api/samples', router);
  };