var smartUtils = require('../smartUtils.js');

function ensureDirectoryExists_callback() {
    console.log('Houston, We\'ve Had a Problem');
};

smartUtils.ensureDirectoryExists('C:/temp', ensureDirectoryExists_callback);

console.log('All ok.');
