const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');
const connectDb = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const claimPointsRoutes = require('./routes/claimPointsRoutes');
const historyRoutes = require('./routes/historyRoutes');

const PORT = process.env.PORT || 4000;
dotenv.config();
app.use(cors());
app.use(express.json());

connectDb()

app.use('/users', userRoutes);
app.use('/claim', claimPointsRoutes);
app.use('/history', historyRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})