import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.FORWARD_EMAIL;
const password = process.env.FORWARD_EMAIL_PASSWORD;
const leadEmail = process.env.TO_EMAIL;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass: password,
  },
});

export async function POST(request) {
  const data = await request.json();

  const { cName, url, fName, email, phone, social_id, message } = data;

  // setup email data with unicode symbols
  let mailOptions = {
    from: user,
    to: leadEmail,
    subject: `Customer's Information`,
    html: `
    <h2 style='text-align:center'>Customer's Information</h2>
    <ul>
        <li> Name: ${fName}</li>
        <li> Company Name: ${cName}</li>
        <li> Company Url : ${url}</li>
        <li> Contact No. ${phone}</li>
        <li> Contact Email : ${email}</li>
        <li> Skype / Telegram Id : ${social_id}</li>
    </ul>
    <p>${message}</p>
    `,
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(`Message sent: ${info.messageId}`);
    return new NextResponse(
      JSON.stringify({
        message: `Message sent: ${info.messageId}`,
      }),
      {
        status: 200,
      }
    );
  });

  return new NextResponse(
    JSON.stringify({
      message: "Successfully processed POST request.",
    }),
    {
      status: 200,
    }
  );
}
