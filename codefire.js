var util = require('util');
var http = require('http');
var fs = require('fs');

var port = 9999;

function CodeFire() {
    this.version = '\n\t\t\t version: 0.0.3';
}

CodeFire.prototype.greetings = function(){
    // say my greetings
    this.readFile('WelcomeNote.txt')
    .then(data => console.log(data))
    .catch(err => console.error(err));
    // console.log(this.version)
}

CodeFire.prototype.launch = function(){
    http.createServer(function (req, res) {
        fs.readFile('WelcomeNote.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text'});
            res.write(data);
            res.end();
        });
    }).listen(port);
    console.log('\nServer Launched!! \nrunning at localhost:'+ port + '\n');
}

CodeFire.prototype.readFile = function (filePath) {
    return new Promise((resolve, reject) => fs.readFile(filePath, 'utf8', (err, data) => err ? reject(err) : resolve(data)));
}

// module.exports = {
//     codefire: new CodeFire()
// }

module.exports = new CodeFire()