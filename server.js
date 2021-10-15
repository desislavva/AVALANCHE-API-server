const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const websocketServer = require('./websocket/websocket-server');

const blockRoutes = require('./routes/blocks');
const transactionRoutes = require('./routes/transactions');
const addressRoutes = require('./routes/address');
const networkRoutes = require('./routes/network');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Avalanche server API',
            version: '1.0.0',
            description: 'Avalanche Api for interacting with node',
            servers: ['http://localhost:4444']
        }
    },
    apis: ['routes/*.js']
   
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

dotenv.config();
const app = express();

app.use(cors({origin: '*'}));

app.use("/blocks/", blockRoutes);
app.use("/transactions/", transactionRoutes);
app.use("/address/", addressRoutes);
app.use("/", networkRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const port = process.env.SERVER_PORT;

server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});