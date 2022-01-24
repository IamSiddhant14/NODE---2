// To run a js file using nodejs we use in integrated terminal simply type -- node <filename.js>
//NPM - node package manager is like a play store to the various node packges avaliable in node module . 
const cp = require('child_process');//This is an node module which help us in creating various sub process within a script
//You can perfome diffrent task using this script

console.log("Opening Calculator");

//Creating diffrent procees within the script to perfome different task

// Inbuild function which help us to run external commonds
cp.execSync('calc');//exec syc is an function which help us in executing a cammond/creates a sub process in syncronus manner

cp.execSync('code');//To open VSCODE

cp.execSync('start chrome https://github.com/IamSiddhant14');//Open browser chrome and then open the provided link

let output = cp.execSync('node test.js');

console.log( 'output ->' + output);//WHen data is returned in the format of binary then we perfome conatenation to convert it into normal text
console.log( 'output ->', output);//This wont work here and would result in unwated output

