const express = require("express");

const app = express();

const port = process.env.PORT || 4444;

server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});