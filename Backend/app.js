const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const sequelize = require("./util/database");
const OnlineShopRoutes = require("./routes/onlineShopRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use("/onlineShop",OnlineShopRoutes);


sequelize.sync()
    .then(result => {
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })
