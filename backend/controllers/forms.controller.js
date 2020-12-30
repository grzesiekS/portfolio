const Forms = require('../db/forms.json');
const nodemailer = require('nodemailer');
const sanitize = require('mongo-sanitize');

const emailPass = require('../../secureVariables/emailPass');

exports.loadAll = async (req, res) => {
  try {
    const result = Forms;
    if(!result) res.status(404).json({ forms: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.sendEmail = async (req, res) => {
  try {

    const bodySanitize = sanitize(req.body);
    const {name, lastName, email, phoneNo, message} = bodySanitize;
    const htmlMessage = message.replace(/\n/g, '<br>\n') + '<br><br>' 
    + `<b>${name} ${lastName}</b><br>`
    + `<b>E-Mail: ${email}</b><br>`
    + `<b>Phone number: ${phoneNo}</b>`;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailPass.emailDetails.user,
        pass: emailPass.emailDetails.pass,
      },
    });
  
    // send mail with defined transport object
    await transporter.sendMail({
      from: emailPass.emailDetails.user, // sender address
      to: emailPass.emailDetails.myEmail, // list of receivers
      subject: 'Hello ✔', // Subject line
      html: htmlMessage, // html body
    });

    res.json({message: 'email sent'});

    // transporter.close();
  } catch(err) {
    res.status(500).json(err);
  }
};