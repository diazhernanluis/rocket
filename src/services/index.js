

const payload = ([launchesInfo, rocketsInfo]) => {

    return launchesInfo.map( ({flight_number, mission_name, rocket}) => {
        
        const {rocket_id, rocket_name} = rocket;
        const { description, flickr_images: images} = rocketsInfo.find( rocketElement => rocketElement.rocket_id === rocket_id);

        const {payload_id, manufacturer, payload_type: type} = rocket.second_stage?.payloads[0];

        return {
            flight_number, 
            mission_name, 
            rocket: {
                rocket_id,
                rocket_name,
                description,
                images
            },
            payloads: [{
                payload_id,
                manufacturer,
                type
            }]
    }});
}


module.exports = {
    payload
}