import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sarkarsubhajit307@gmail.com",
    pass: "xxja qbqi pzqy nztl",
  },
});

export async function POST(request) {
  const data = await request.json();

  const { cName, url, fName, email, phone, social_id, message } = data;

  // setup email data with unicode symbols
  let mailOptions = {
    from: "sarkarsubhajit307@gmail.com",
    to: "sarkarsubhajit9499@gmail.com",
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
