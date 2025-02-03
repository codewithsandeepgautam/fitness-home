const mongoose = require("mongoose");
const TimeTableSchema = mongoose.Schema({
    exerciseName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    handle: {
        type: String,
        required: true
    },
    dayId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schedule',
        required: true
    },
    startTimeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'TimeSchedule',

        
        required: true
    },
    endTimeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'TimeSchedule',
        required: true
    },
    details: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default : true
    }
},{timestamps: true})

const TimeTable = mongoose.model("TimeTable",TimeTableSchema);
module.exports = TimeTable;
