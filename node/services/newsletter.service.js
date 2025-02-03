const NewsSchema = require("../schemas/newsletter.schema");

let service = {}
service.createNewsLetter = createNewsLetter;
service.getNewsLetter = getNewsLetter;

async function createNewsLetter(email) {
    try {
        const existEmail = await NewsSchema.findOne(email);
        if (existEmail) {
            return Promise.reject({ data: 'email already exists!' });
        }
        const newEmail = new NewsSchema(email);
        await newEmail.save();
        return { status: 200, message: "Email Save Successfully" };
    } catch (error) {
        console.error("Error saving email", error);
        return { status: 500, message: "Error saving email" };
    }
};
async function getNewsLetter() {
    try {
        const data = await NewsSchema.find();
        return data;
    }
    catch (error) {
        return Promise.reject({ error: 'Unable to get Contacts' })
    }
}

module.exports = service;