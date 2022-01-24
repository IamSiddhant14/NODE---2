const path = require('path');

// To determine extension of the file
let ext = path.extname(' C:\\Users\\Acer\\Desktop\\NODE\\NODE\\f2.txt');

console.log(ext);

//To determine file name at the given destination
let basename = path.basename('C:\\Users\\Acer\\Desktop\\NODE\\NODE\\f1.txt');
console.log('basename '+basename);


console.log(__dirname);//This gives you the directory name which you are in
console.log(__filename);//This gives you the file name which you are in
