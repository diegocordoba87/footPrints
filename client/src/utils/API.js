import axios from "axios";

export default {

  // Gets all notes
  getNotes: function(userID) {
    return axios.get("/api/users/" + userID);
  },

  getContent: function(id) {
    return axios.get("/api/notes/:" + id)
  }
};
