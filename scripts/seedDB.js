const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/projectlist"
);

const issueSeed = [
    {
        title: "Project 3",
        bug: "Issues loaded on the page",
        details: "Having an issues having the bugs rendered on the page",
        date: new Date(Date.now())
    },
    {
        title: "Project 3",
        bug: "Footer",
        details: "Have the footer to stick to the bottom",
        date: new Date(Date.now())
    }
];

db.Project
    .remove({})
    .then(() => db.Project.collection.insertMany(issueSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })