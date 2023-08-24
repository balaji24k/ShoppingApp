const OnlineShopItems = require("../models/onlineShop");

exports.postData = (req, res, next) => {
//   console.log(req.body, "post");
  OnlineShopItems.create(req.body)
		.then((result) => {
			res.json(result);
		}).catch((err) => {
			res.json(err);
		});
};

exports.getData = (req, res, next) => {
  OnlineShopItems.findAll()
    .then(result => {
      // console.log("ressult>>>>>>>>", result);
      res.json(result);
    }).catch((err) => {
			res.json(err);
		});
};

exports.updateData = (req, res, next) => {
  console.log("update id",req.params.id);
	console.log("update body",req.body);
  OnlineShopItems.findByPk(req.params.id)
    .then(result => {
			result.itemName = req.body.itemName;
      result.itemDescription = req.body.itemDescription;
      result.itemPrice = req.body.itemPrice;
      result.itemQuantity = req.body.itemQuantity;
      // console.log("ressult>>>>>>>>", result);
      return result.save();
    })
    .then(data => {
      console.log("data>>>>>>>>",data)
      res.json(data);
    })
    .catch(err => {
			res.json(err);
		});
};
