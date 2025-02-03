const TimeTableSchema = require("../schemas/timetable.schema");
let service = {}

service.getTimeData = getTimeData;
service.getClass = getClass;
async function getTimeData() {
    try {
        const data = await TimeTableSchema.find({ isActive: true });
        return data;
    }
    catch (error) {
        return Promise.reject({ error: 'Unable to get data' })
    }
}
async function getClass(handle) {
    try {
        const findClass = await TimeTableSchema.findOne({ handle: handle });
        if (!findClass) {
            return "data not found";
        }
        else {
            return findClass;
        }
    }
    catch (error) {
        return Promise.reject({ error: 'Unable to get data' })
    }
}
module.exports = service;