console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./')

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}`);