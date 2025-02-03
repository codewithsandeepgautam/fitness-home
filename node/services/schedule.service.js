const ScheduleSchema = require("../schemas/schedule.schema");

let service = {};
service.getSchedules = getSchedules;

async function getSchedules() {
    try{
        const findData = await ScheduleSchema.find({});
        return findData;
    }
    catch(err){
        return Promise.reject({err: 'Unable to get data, Something went wrong!'})
    }
}
module.exports = service;