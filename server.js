const express = require('express');
const dotenv = require('dotenv');

const blocksMethods = require('./routes/blocks');

dotenv.config();
const app = express();

app.use("/", blocksMethods);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.SERVER_PORT;

server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});