const accountSid = 'AC9cfd44760816b984b894ab5e8e781a07';
const authToken = '9dc4901b577e135bff92579554b0d630';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'hey shashwat help meeee !!!',
        messagingServiceSid: 'MG3e02ce83360a59f0c00b6788b56b784b',
        to: '+917521007110'
    })
    .then(message => console.log('Message SID:', message.sid))
    .catch(error => console.error('Error:', error));
