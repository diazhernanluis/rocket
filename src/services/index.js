

const payload = ([launchesInfo, rocketsInfo]) => {

    return launchesInfo.map( ({flight_number, mission_name, rocket}) => {
        
        const { description, flickr_images} = rocketsInfo.find( rocket => rocket.rocket_id === rocket.rocket_id);
        const {rocket_id, rocket_name} = rocket;

        const {payload_id, manufacturer, payload_type} = rocket.second_stage?.payloads[0];

        return {
            flight_number, 
            mission_name, 
            rocket: {
                rocket_id,
                rocket_name,
                description,
                images: flickr_images
            },
            payloads: [{
                payload_id,
                manufacturer,
                type: payload_type
            }]
    }});
}


module.exports = {
    payload
}