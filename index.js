var http = require('http');
var fs = require('fs');

var initServer = function(){
    http.createServer(function (req, res) {
        fs.readFile('WelcomeNote.txt', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text'});
            res.write(data);
            res.end();
        });
    }).listen(8080);
}

function readFile(filePath) {
    return new Promise((resolve, reject) => fs.readFile(filePath, 'utf8', (err, data) => err ? reject(err) : resolve(data)));
}

var welcomeMessage = function(){
    readFile('WelcomeNote.txt')
        .then(data => console.log(data))
        .catch(err => console.error(err));
}


module.exports = {
    greet: welcomeMessage
}