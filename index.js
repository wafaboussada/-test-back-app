const express = require('express');

const cors = require('cors');
const app = express();
app.options('*', cors());
app.use(cors());
app.use(express.json());

app.post('/calculate_age', async (req, res) => {
    try {
        const year = req.body.year;
        const currentYear = new Date().getFullYear();
        res.status(200).json({age: Math.abs(currentYear - year)})
        } catch (err) {
        res.status(500).json(err);
    }
})

app.listen('7000', () => {
    console.log('server is running');
})

