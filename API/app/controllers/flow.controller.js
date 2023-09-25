const Flow = require("../models/flow.model.js");

// Create and Save a new Sample
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   // Create a Sample
//   const sample = new Sample({
//     title: req.body.title,
//     description: req.body.description,
//     published: req.body.published || false
//   });

//   // Save Sample in the database
//   Sample.create(sample, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Sample."
//       });
//     else res.send(data);
//   });

// };

// Retrieve all Samples from the database (with condition).
exports.findAll = (req, res) => {
    const name = req.query.name;

    Flow.getAll(name, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};

// // Find a single Sample with a id
// exports.findOne = (req, res) => {
  
// };

// // find all published Samples
// exports.findAllPublished = (req, res) => {
  
// };

// // Update a Sample identified by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Sample with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Samples from the database.
// exports.deleteAll = (req, res) => {
  
// };