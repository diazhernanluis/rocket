const {launches, rockets} = require('./builder');

const payloadQuery = async () => (await Promise.all([launches(), rockets()]));

module.exports = {
    payloadQuery
}