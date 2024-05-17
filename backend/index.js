const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const productRouter = require('./routes/Products');
app.use("/products", productRouter);

const inboundRouter = require('./routes/Inbound');
app.use("/inbound", inboundRouter);

const salesRouter = require('./routes/Sales');
app.use("/sales", salesRouter);

const listingsRouter = require('./routes/Listings');
app.use("/listings", listingsRouter);

const brandsRouter = require('./routes/Brands');
app.use("/brands", brandsRouter);

const ordersRouter = require('./routes/Orders');
app.use("/orders", ordersRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running on http://localhost:3001");
    });
});


