const mongoose = require("mongoose");
const TimeSchema = mongoose.Schema({
    timeStart :{
        type: String,
        required : true
    },
    timeEnd :{
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default :true
    }
},{timestamps : true})

const TimeSchedule = mongoose.model("TimeSchedule",TimeSchema);
module.exports = TimeSchedule;