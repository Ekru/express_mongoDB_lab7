'use strict';
var crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';
    
    
function decrypt(readDoc) {
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(readDoc,'hex', 'utf8');
    dec += decipher.final('utf8');
    console.log(dec);
    return dec;
}

module.exports = decrypt;


