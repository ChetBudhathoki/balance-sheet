import axios from "axios";

export default {
  // Gets all books
  getBalances: function() {
    return axios.get("/api/balances");
  },
  // Gets the book with the given id
  getBalances: function(id) {
    return axios.get("/api/balances/" + id);
  },
  // Deletes the book with the given id
  deleteBalances: function(id) {
    return axios.delete("/api/balances/" + id);
  },
  // Saves a book to the database
  saveBalances: function(balanceData) {
    return axios.post("/api/balances", balanceData);
  }
};
