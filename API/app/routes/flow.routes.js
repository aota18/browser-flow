module.exports = app => {
    const flows = require("../controllers/flow.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/", samples.create);
  
    // Retrieve all Tutorials
    router.get("/", flows.findAll);
  
    // Retrieve all published Tuqqqtorials
    // router.get("/published", samples.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", samples.findOne);
  
    // // Update a Tutorial with id
    // router.delete("/:id", samples.delete);
  
    // // Delete all Tutorials
    // router.delete("/", samples.deleteAll);
  
    app.use('/api/flows', router);
  };