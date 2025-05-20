const express = require('express');
const cors = require('cors');
const axios = require('axios');
const usernameRouter = express.Router();

const app = express();
const PORT =5000;

app.use(cors());
app.use(express.json());
app.use('/usuarios', usernameRouter);

app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
       
});