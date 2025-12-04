require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const produtosRoutes = require("./src/routes/produtos.routes");

app.use(express.json());
app.use(cors());

app.use(produtosRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})