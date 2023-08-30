const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

//transport
// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_SENDGRID,
//     },
//   })
// );

// const sendEmailController = (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     //validation
//     if (!name || !email || !msg) {
//       return res.status(500).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }
//     //email matter
//     transporter.sendMail({
//       to: "typeyouremailadresshere@gmail.com",
//       from: "typeyouremailadresshere@gmail.com",
//       subject: "Regarding Mern Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p>Name : ${name}</p></li>
//           <li><p>Email : ${email}</p></li>
//           <li><p>Message : ${msg}</p></li>
//         </ul>
//       `,
//     });

//     return res.status(200).send({
//       success: true,
//       message: "Your Message Send Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//       error,
//     });
//   }
// };




// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'rkpandeyisin2015@gmail.com',
    pass: 'mbbmsdlnivvrvwkv',
  },
});

// Handle form submission and send email
const sendEmailController = (req, res) => {
  const { name, email, msg } = req.body;

  const mailOptions = {
    from: email,
    to: 'recipient@example.com', // Change to the recipient's email address
    subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({
              success: false,
              message: "Send Email API Error",
              error,
            });
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ success: true,
            message: "Your Message Send Successfully"});
    }
  });
};




module.exports = { sendEmailController };
