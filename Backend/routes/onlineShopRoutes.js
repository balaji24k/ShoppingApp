const expense = require("express");

const router = expense.Router();

const OnlineShopItems = require("../controllers/onlineShopController");

router.post("/", OnlineShopItems.postData);

router.get("/", OnlineShopItems.getData);

router.put("/:id",OnlineShopItems.updateData);

module.exports = router;