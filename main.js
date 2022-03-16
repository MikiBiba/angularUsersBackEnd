const express = require('express');
const userRouter = require('./routers/userRouter');
const cors = require('cors');

require('./configs/database');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/users', userRouter);

app.listen(8002);
