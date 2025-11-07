import nodemailer from 'nodemailer';

export function sendMail(email,password)
{
  
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'divyajoshi6265@gmail.com',
    pass: 'jqqgrkvzypezjgcg'
  }
});

let mailOptions = {
  from: 'divyajoshi6265@gmail.com',
  to: email,
  subject: 'verification Email ScrapAuction',
  html: "<h1>welcome to srcapAuction</h1><p>you have successfully registration our site your credentials are attached below</p><h3>Username:"+email+"</h3><h3>password:"+password+"</h3><h1>Click on the link below to redirect</h1><a href='http://localhost:3000/verify/"+email+"'>Click to Verify......</a>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}