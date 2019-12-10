const db = require("../models");

// Defining methods for the projectsController
module.exports = {
  findAll: function(req, res) {
    db.Issue.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Issue.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("WTH", req.body);
    db.Issue.create({
      issue: req.body.issue,
      details: req.body.details
    })
      .then(issue => {
        console.log("This is the one for Jegor", issue);
        return db.Project.findOneAndUpdate(
          { _id: req.body.projectId },
          { $push: { issues: issue._id } },
          { new: true }
        );
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Issue.findOneAndUpdate({
      issue: req.body.issue,
      resolved: req.body.resolved
    })
      .then(issue => {
        console.log("this is it", issue);
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  checkedUpdate: function(req, res) {
    db.Issue.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { resolved: true, details: req.body.details  } },

    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Issue.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
