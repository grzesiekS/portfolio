const Forms = require('../db/forms.json');
const nodemailer = require('nodemailer');
const sanitize = require('mongo-sanitize');

const emailPass = process.env.NODE_ENV === 'production' ? null : require('../../secureVariables/emailPass');

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
    const {name, email, message} = bodySanitize;
    if (name
      && email
      && email.split('@').length === 2
      && email.split('.').length === 2
      && email.split('.')[1] !== ''
      && email.indexOf(' ') === -1
      && message
    ) {
      const htmlMessage = message.replace(/\n/g, '<br>\n') + '<br><br>' 
      + `<b>${name}</b><br>`
      + `<b>E-Mail: ${email}</b><br>`;

      let transporter = nodemailer.createTransport({
        service: process.env.NODE_ENV === 'production' ? process.env.EMAIL_SERVICE : emailPass.emailDetails.emailService,
        auth: {
          user: process.env.NODE_ENV === 'production' ? process.env.USER : emailPass.emailDetails.user,
          pass: process.env.NODE_ENV === 'production' ? process.env.PASS : emailPass.emailDetails.pass,
        },
      });
    
      // send mail with defined transport object
      await transporter.sendMail({
        from: process.env.NODE_ENV === 'production' ? process.env.USER : emailPass.emailDetails.user, // sender address
        to: process.env.NODE_ENV === 'production' ? process.env.MY_EMAIL : emailPass.emailDetails.myEmail, // list of receivers
        subject: `Message from Portfolio website`, // Subject line
        html: htmlMessage, // html body
      });

      res.json({message: 'email sent'});
    } else {
      res.json({message: 'email not sent'});
    }

    // transporter.close();
  } catch(err) {
    res.status(500).json(err);
  }
};