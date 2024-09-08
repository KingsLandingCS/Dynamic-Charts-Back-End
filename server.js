const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Define your data endpoints
app.get('/api/barchart-data', (req, res) => {
    res.json({
        series: [
            {
                name: 'Series 1',
                data: [44, 55, 41, 67, 22, 43, 21, 49, 35, 58, 31, 63]
            },
            {
                name: 'Series 2',
                data: [13, 23, 20, 8, 13, 27, 33, 12, 41, 14, 18, 21]
            }
        ]
    });
});

app.get('/api/candlestick-data', (req, res) => {
    res.json({
        series: [
            {
                data: [
                    {
                        x: new Date('2024-09-01').toISOString(),
                        y: [6570, 6595, 6550, 6570]
                    },
                    {
                        x: new Date('2024-09-02').toISOString(),
                        y: [6575, 6600, 6555, 6580]
                    },
                    {
                        x: new Date('2024-09-03').toISOString(),
                        y: [6580, 6620, 6570, 6610]
                    },
                    {
                        x: new Date('2024-09-04').toISOString(),
                        y: [6610, 6630, 6600, 6620]
                    },
                    {
                        x: new Date('2024-09-05').toISOString(),
                        y: [6620, 6640, 6605, 6635]
                    }
                ]
            }
        ]
    });
});

app.get('/api/linechart-data', (req, res) => {
    res.json({
        series: [
            {
                name: 'Series 1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 120, 110]
            },
            {
                name: 'Series 2',
                data: [20, 30, 45, 50, 49, 50, 65, 81, 105, 120, 100, 90]
            }
        ]
    });
});

app.get('/api/piechart-data', (req, res) => {
    res.json({
        series: [44, 55, 13, 43, 22],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
