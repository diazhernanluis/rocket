const { payloadQuery } = require('../accessors/index');
const { payload } = require('../services/index');

const customLaunches = async (req, res) => {
    try {
        const createPayload = payload(await payloadQuery());
        res.status(200).send(createPayload);
    } catch (e) {
        console.log(e);
        res.status(500).send("something went wrong!")
    }
    
}

const customFavorites = async (req, res) => {
    const { favorites } = req.query;
    
    try {
        const createPayload = payload(await payloadQuery());
        const findFavorites = createPayload.filter( launches => favorites.includes(launches.flight_number));
    
        res.status(200).send(findFavorites);
    } catch (e) {
        console.log(e);
        res.status(500).send("something went wrong!")
    }
}

module.exports = {
    customLaunches,
    customFavorites
}