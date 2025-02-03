const CategorySchema = require("../schemas/category.schema");

let service = {};
service.getCategories = getCategories;

async function getCategories() {
    try{
        const findData = await CategorySchema.find({});
        return findData;
    }
    catch(err){
        return Promise.reject({err: 'Unable to get data, Something went wrong!'})
    }
}
module.exports = service;