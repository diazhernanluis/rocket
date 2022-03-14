const { searchHourlyData } = require('../accessors/builder');

const searchByHour = async (req, res) => {

    try {
        const data = await searchHourlyData();
        await global.db.collection("dailysearch").insertOne(data);
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        res.status(500).send("Sorry, something went wrong!");
    }
}

const findByCity = async (req, res) => {
    try {
        const { city } = req.query;
        const results = await global.db.collection("dailysearch").find({name: city}).toArray();
        res.status(200).json(results);
    } catch (e) {
        console.log(e);
        res.status(500).send("Sorry, something went wrong!");
    }
}

const test = (req, res) => {
    res.status(200).send("test OK!");
}

module.exports = {
    test,
    searchByHour,
    findByCity
}