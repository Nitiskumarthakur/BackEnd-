let os = require('os');
let fs = require('fs');


console.log(os.userInfo());
console.log(os.version());

fs.appendFile('node.txt', 'This file is created by using the node/fs Method \n',()=>{console.log('ok file is created')});


