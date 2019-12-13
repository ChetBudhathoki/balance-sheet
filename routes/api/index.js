const router = require("express").Router();
const balanceRoutes = require("./balances");

// balance routes

router.use("/balances", balanceRoutes);

module.exports = router;