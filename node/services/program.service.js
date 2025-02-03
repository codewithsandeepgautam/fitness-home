const ProgramsSchema = require("../schemas/program.schema");

let service = {}
service.getPrograms = getPrograms;
service.getProgramData = getProgramData;

async function getPrograms() {
    try {
        const data = await ProgramsSchema.find({ isActive: true });
        return data;
    }
    catch (error) {
        return Promise.reject({ error: 'Unable to get data' })
    }
}
async function getProgramData(handle) {
    try {
        const findService = await ProgramsSchema.findOne({ handle: handle });
        if (!findService) {
            return "data not found";
        }
        else {
            return findService;
        }
    }
    catch (error) {
        return Promise.reject({ error: 'Unable to get data' })
    }
}

module.exports = service;