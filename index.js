const express = require('express');
const config_env = require('dotenv');
config_env.config();
const config = require('./config');
const routes = require('./src/routes');
const connectDB = require('./src/lib/database');
const { port } = config.server;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, async () => {
    await connectDB.MongoConnection.open();
    console.log(`ᕕ(ಠ‿ಠ)ᕗ Running on port: ${port}`);
});
