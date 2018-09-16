const DAO = require("./DAO.js");

function reservationsEndpoint(request, h) {
    return DAO.getReservations().then(data => {
        return data.map(row => ({
            id: row['Id'],
            eventType: row['Event_General_Type'],
            eventDetailType: row['Event_Detail_Type'],
            roomType: row['Room_Type'],
            comment: row['Comment'],
            time: row['Time']
        }));
    });
}

module.exports = {
    reservationsEndpoint
};
