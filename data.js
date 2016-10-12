
var mc = require('mongodb').MongoClient;

function getData(){
    return new Promise(function(resolve, reject){
        mc.connect('mongodb://localhost:27017/lab7db', function(err, db){
        if(err) throw err;
        //db.collection('lab1').insert({message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"});
        //console.log('document inserted');
        db.collection('lab1').findOne({}, function(err, doc){
            if(err) {
                throw err;
                reject();
            }
            readDoc = doc.message;
            console.log('x:'+readDoc);
            resolve(readDoc);
            db.close();
        });   
    }); 
    })
     
}

module.exports = getData;