var util = require('util');
var fire = require('./index.js');

function CodeFire() {
    this.version = '\n\t\t\t version: 0.0.3';
}

CodeFire.prototype.greetings = function(){
    // say my greetings
    fire.greet();
    // console.log(this.version)
}

var codefire = new CodeFire();
codefire.greetings();

// console.log('\n\n')