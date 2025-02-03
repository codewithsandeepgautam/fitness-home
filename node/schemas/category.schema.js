const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema({
    categoryTitle :{
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

const Category = mongoose.model("Category",CategorySchema);
module.exports = Category;