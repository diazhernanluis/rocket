const express = require("express");
const router = express.Router();
const { test, searchByHour, findByCity } = require('../controllers/index');
const { customLaunches, customFavorites } = require('../controllers/space');

router.get('/custom', customLaunches);

router.get('/favorite', customFavorites);

router.get("/search/hourly", searchByHour);
router.get("/findByCity", findByCity)
router.get("/", test);

module.exports = router;