const newman = require ('newman'); 
require('dotenv').config(); 

newman. run ({
    collection :`https://api.postman.com/collections/37996569-422a3147-e2c2-427e-97f8-190b49daae92?access_key=${process.env.secretKey}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra', 
    iterationCount : 1, 
    reporter: { 
        htmlextra: { 
            export:'./Reports/report.html',
        }
    }
}, function (err) { 
    if (err) { throw err; }
    console.log('collection run complete!');
    
});