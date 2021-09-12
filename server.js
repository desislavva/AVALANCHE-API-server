const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const blockRoutes = require('./routes/blocks');
const transactionRoutes = require('./routes/transactions');
const addressRoutes = require('./routes/address');

dotenv.config();
const app = express();

app.use(cors({origin: '*'}));

app.use("/blocks/", blockRoutes);
app.use("/transactions/", transactionRoutes);
app.use("/address/", addressRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.SERVER_PORT;

server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});