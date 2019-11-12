import axios from "axios";

export default {
  // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },

  // Gets all issues for future development
  getIssues: function() {
    return axios.get("/api/issues");
  },
  // Saves a issue to the database
  saveIssue: function(issueData) {
    return axios.post("/api/issues", issueData);
  },
  // Gets the issue with the given id
  getIssue: function(id) {
    return axios.get("/api/issues/" + id);
  },
  // Deletes the issue with the given id
  deleteIssue: function(id) {
    return axios.delete("/api/issues/" + id);
  },

  // Get all details
  getDetails: function() {
    return axios.get("/api/details");
  },
  // Saves a detail to the database
  saveDetail: function(detailData) {
    return axios.post("/api/details", detailData);
  },
  // Gets the issue with the given id
  getDetail: function(id) {
    return axios.get("/api/issues/details/" + id);
  }
};
