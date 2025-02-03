const TimeSchema = require("../schemas/time.schema");

let service = {};
service.getTime = getTime;
async function getTime() {
    try{
        const findData = await TimeSchema.find();
        return findData;
    }
    catch(err){
        return Promise.reject({err: 'Unable to get data, Something went wrong!'})
    }
}
module.exports = service;