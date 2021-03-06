require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db')

const router = require('./routes/index');
const errorMiddleware = require('./middlewares/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start().then();