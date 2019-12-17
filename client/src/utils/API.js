import axios from "axios";

export default {
  // Gets all balances
  getBalances: function() {
    return axios.get("/api/balances");
  },

  getBalance: function(id) {
    return axios.get("/api/balances/" + id);
  },

  deleteBalances: function(id) {
    return axios.delete("/api/balances/" + id);
  },

  saveBalance: function(balanceData) {
    console.log('hit save balance')
    return axios.post("/api/balances", balanceData);
  }
};
