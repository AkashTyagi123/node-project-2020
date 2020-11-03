const _ = require('lodash');	
const nodemailer = require('nodemailer');
const config = {
    host: 'smtp.gmail.com',
    port: 25,
    auth: {
        user: '<yourmailhere>',
        pass: '<yourpasswordhere>'
    }
};
const transporter = nodemailer.createTransport(config);
var defaultMail = {
    from: '<yourmailhere>',
    text: 'Action Required:Activate your account now',
};

module.exports = function (mail){
    // use default setting
    mail = _.merge({}, defaultMail, mail);
    
    // send email
    transporter.sendMail(mail, function(error, info){
        if(error) return console.log(error);
        console.log('mail sent:', info.response);
    });
};