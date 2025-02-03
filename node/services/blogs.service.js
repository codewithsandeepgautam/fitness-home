const BlogsSchema = require("../schemas/blogs.schema");

let service = {}
service.getBlogs = getBlogs;
service.getBlogsData = getBlogsData;

async function getBlogs(){
    try{
        const data = await BlogsSchema.find({isActive: true});
        return data;
    }
    catch(error){
        return Promise.reject({ error: 'Unable to get data' })

    }
}
async function getBlogsData(handle){
    try{
        const findBlogs = await BlogsSchema.findOne({handle: handle});
        if(!findBlogs){
          return "data not found";            
        }
        else{
            return findBlogs;
        }
    }
    catch(error){
        return Promise.reject({ error: 'Unable to get data' })
    }
}
module.exports = service;