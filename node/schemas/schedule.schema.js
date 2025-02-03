const mongoose = require("mongoose");
const ScheduleSchema = mongoose.Schema({
    day :{
        type: String,
        required : true
    },
    handle :{
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default :true
    }
},{timestamps : true})

const Schedule = mongoose.model("Schedule",ScheduleSchema);
module.exports = Schedule;