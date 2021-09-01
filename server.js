const express = require("express");
const blocksMethods = require("./routes/blocks");

const app = express();
app.use("/", blocksMethods);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 4444;

server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});