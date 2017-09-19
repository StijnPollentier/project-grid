var pg = require('pg');
var config = {
    user: 'eondev',
    database: 'company25',
    password: '2cRrKHgA',
    host: 'eondev.cig4gkvclmb1.eu-central-1.rds.amazonaws.com',
    port: '5432',
    max: 10,
    idleTimeoutMillis:30000
};

var pool = new pg.Pool(config);

module.exports.getKlanten = function(req, res){
    var klantenString = "";
    console.log("zoekt naar klanten");
    pool.connect(function(err, client, done){
        if(err){
            return console.error('error fetching client from pool', err);
        }
        client.query("select * from abc.relations limit 5", function(err,result){
            done();
            if(err){
                return console.error('error running query', err);
            }            
            var dataString = JSON.stringify(result.rows);
            var count = Object.keys(result.rows).length;
            
            var klanten = result.rows;           
            res
            .status(200)            
            .render("index", {dataString: dataString, klant: klanten, count: count});        

            klantenString = dataString;
        console.log("done");
        })        
    });
    return klantenString;
}