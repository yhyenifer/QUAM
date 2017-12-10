var fs = require('fs');
var path = require('path');

var files = fs.readdirSync(__dirname);

files.forEach(element => {
    var fileName= path.basename(element, '.js');
    if (fileName !== 'index'){
         exports[fileName]= require('./'+fileName);
    }
});