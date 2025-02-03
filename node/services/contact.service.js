const contactSchema = require("../schemas/contact.schema");
const nodemailer = require("nodemailer");
const { google } = require('googleapis');
// const credential = require("../credential.json");
let service = {}
service.createContact = createContact;
service.uploadToSheet = uploadToSheet;
service.getContacts = getContacts;

async function createContact(body) {
    const { fullName, email, phone, subject, message } = body;
    const emailTemplate = `
    <html>
      <head></head>
      <body>
        <div style="max-width: 600px; margin: auto; background: #e99e7a; padding: 20px; text-align: center; color: #fff; font-family: 'Roboto', sans-serif;">
          <h1 style="color: #071e43; font-weight: 900; font-family: Roboto;">Fitness Home</h1>
          <h2 style="color: #071e43; font-weight: 900;">Contact Form Submission</h2>
          <div style="margin-bottom: 20px;">
            <strong>Full Name:</strong> ${fullName}
          </div>
          <div style="margin-bottom: 20px;">
            <strong>Phone:</strong> ${phone}
          </div>
          <div style="margin-bottom: 20px;">
            <strong>Email:</strong> ${email}
          </div>
          <div style="margin-bottom: 20px;">
            <strong>Subject:</strong> ${subject}
          </div>
          <div style="margin-bottom: 20px;">
            <strong>Message:</strong> ${message}
          </div>
        </div>
      </body>
    </html>
        `;
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.GOOGLE_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.GOOGLE_MAIL,
                pass: process.env.GOOGLE_PASS
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.GOOGLE_MAIL,
            subject: `Fitness-Home | Contact | ${subject}`,
            html: emailTemplate
        };
        const status = await transporter.sendMail(mailOptions);
        if (status) {
            const newContact = new contactSchema({
                fullName: fullName,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            });
            const contactData = await newContact.save();
            // await uploadToSheet(body)
            return status
        }
    } catch (error) {
        console.error('Error while updating sheet:', error);
        return Promise.reject({ error: 'Something went wrong.' });
    }
}

async function uploadToSheet(body) {
    const { fullName, subject, message, phone, email } = body;
    try {
        console.log("Initializing GoogleAuth...");
        const auth = new google.auth.GoogleAuth({
            credential,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        console.log("Creating sheets client...");
        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.SPREADSHEET_ID;
        const range = 'GYM';

        console.log("Fetching existing values...");
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const existingValues = response.data.values || [];
        const currentDate = await convertDate();
        const newValues = [
            ...(existingValues.length > 0 ? [] : [['Date', 'Name', 'Subject', 'Message', 'Phone', 'Email']]),
            ...existingValues,
            [currentDate, fullName, subject, message, phone, email],
        ];

        console.log("Updating sheet...");

        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            requestBody: {
                values: newValues,
            },
        });

        console.log("Sheet updated successfully");
        return { message: 'Subscription successful' };
    } catch (error) {
        console.error('Error in uploadToSheet:', error);
        return Promise.reject({ error: 'Something went wrong.' });
    }
}

async function convertDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
}
async function getContacts() {
    try {
        const data = await contactSchema.find();
        return data;
    }
    catch (error) {
        return Promise.reject({ error: 'Unable to get Contacts' })
    }
}

module.exports = service;