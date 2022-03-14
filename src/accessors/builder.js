const axios = require('axios');
const { weather, spaceData } = require('../../config/index');

const searchHourlyData = async () => (await axios(`${weather.base_url}?q=${weather.city}&appid=${weather.api}`)).data;

const launches = async () => (await axios (`${spaceData.launches}`)).data

const rockets = async () => (await axios (`${spaceData.rockets}`)).data

module.exports = {
    searchHourlyData,
    launches,
    rockets
}