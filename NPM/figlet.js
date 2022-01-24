// npm init to initalize the new node project
//Frist do "npm install figlet "then after that ,Imported figlet
const figlet = require('figlet');

figlet('Node js is love', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

