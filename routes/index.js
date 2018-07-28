const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Chart Repository' });
});

/* GET routers */

/* ---------- BAR CHARTS ----------*/

/* simpleBarChart */
router.get('/barCharts/simpleBarChart', (req, res, next) => {
    res.sendFile(__dirname + '/charts/barCharts/simpleBarChart.html');
});
/* simpleBarChart_h */
router.get('/barCharts/simpleHorizontalBarChart', (req, res, next) => {
    res.sendFile(__dirname + '/charts/barCharts/simpleHorizontalBarChart.html');
});
/* waterfalls */
router.get('/barCharts/waterfalls', (req, res, next) => {
    res.sendFile(__dirname + '/charts/barCharts/waterfalls.html');
});

/* ---------- HEATMAP ----------*/

/* weeklyHeatmap */
router.get('/heatmaps/cartesianWeekly', (req, res, next) => {
    res.sendFile(__dirname + '/charts/heatmaps/cartesianWeekly.html');
});

/* ---------- LINE CHARTS ----------*/

/* timeSeriesPlot */
router.get('/lineCharts/timeSeriesPlot', (req, res, next) => {
    res.sendFile(__dirname + '/charts/lineCharts/timeSeriesPlot.html');
});
/* energyUse */
router.get('/lineCharts/energyUse', (req, res, next) => {
    res.sendFile(__dirname + '/charts/lineCharts/energyUse.html');
});
/* ---------- OTHERS ----------*/

/* pictograph */
router.get('/others/Pictograph', (req, res, next) => {
    res.sendFile(__dirname + '/charts/others/pictograph.html');
});
/* sankey */
router.get('/others/Sankey', (req, res, next) => {
    res.sendFile(__dirname + '/charts/others/sankey.html');
});
/* ---------- PIE CHARTS ----------*/

/* simplePieChart */
router.get('/pieCharts/simplePieChart', (req, res, next) => {
    res.sendFile(__dirname + '/charts/pieCharts/simplePieChart.html');
});

/* ---------- SCATTERPLOT ----------*/

/* Scatterplots */
router.get('/scatterPlots/scatterZoom', (req, res, next) => {
    res.sendFile(__dirname + '/charts/scatterPlots/scatterZoom.html');
});
/* menvwomen */
router.get('/scatterPlots/menvwomen', (req, res, next) => {
    res.sendFile(__dirname + '/charts/scatterPlots/menvwomen.html');
});

module.exports = router;