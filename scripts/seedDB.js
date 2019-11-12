const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectlist");

let projectSeed = {
  title: "Project 3",
  issues: [],
  date: new Date(Date.now())
};

const issueSeed = {
  issue: "Issue render",
  details: "Can't get it to post",
  date: new Date(Date.now())
};

db.Issue.remove({})
  .then(() => db.Issue.collection.insertOne(issueSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //
    projectSeed.issues.push(data.insertedId);
    db.Project.remove({})
      .then(() => db.Project.collection.insertOne(projectSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
