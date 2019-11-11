import axios from "axios";

export default {
  // Gets all projects
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets all bugs
  getBugs: function () {
    return axios.get("/api/projects/bugs");
  },
  // Gets the project with the given id
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function (projectData) {
    return axios.post("/api/projects", projectData);
  }
};
