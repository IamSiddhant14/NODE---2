//os module gives us the info related to our os and cpu
const os = require('os');

console.log(os.arch());//Architecture 64 0r 32

console.log(os.platform()); //Tells about platform

console.log(os.networkInterfaces()); //give details regarding network

console.log(os.cpus()); //Cpu specification

