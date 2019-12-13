const router = require("express").Router();
const balancesCpontroller = require("../../controllers/balancesController");

// Matches with "/api/balances"

router
.route("/")
.get(balancesCpontroller.findAll)
.post(balancesCpontroller.create);

// Matches with "/api/balances/:id"

router
.route("/:id")
.get(balancesCpontroller.findAll)
.put(balancesCpontroller.update)
.delete(balancesCpontroller.remove);

module.exports = router;