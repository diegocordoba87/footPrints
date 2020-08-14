import axios from "axios";

export default {
  // Gets all notes
  getNotes: function (userID) {
    return axios.get("/api/users/" + userID);
  },

  getUser: function (username) {
    return axios.get(`/api/users/${username}`);
  },
  getUserById: function (id) {
    return axios.get(`/api/users/${id}`);
  },

  getContent: function (id) {
    return axios.get("/api/notes/:" + id);
  },
};
