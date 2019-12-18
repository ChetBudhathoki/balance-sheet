import axios from "axios";

export default {
  // Gets all balances
  getBalances: function() {
    return axios.get("/api/balances");
  },

  getBalance: function(id) {
    return axios.get("/api/balances/" + id);
  },

  deleteBalance: function(id) {
    return axios.delete("/api/balances/" + id);
  },

  saveBalance: function(balanceData) {
    return axios.post("/api/balances", balanceData);
  }
};
