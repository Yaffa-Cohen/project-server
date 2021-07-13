var MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017";

class InsertProduct{
    TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";
    generateAccessToken = (username) => {
        return jwt.sign({ username }, TOKEN_SECRET);
    };

    insertProduct=(req,res)=>{
        debugger;
        const {nameP,colorP,priceP,descP,imgUrlP,categoryP} =req.body;
        debugger;

        MongoClient.connect(url,function(err, db){
            if (err) throw err;
            var dbo = db.db('Project');
            var product = { nameP,colorP,priceP,descP,imgUrlP,categoryP };
        debugger;

            dbo.collection("product").insertOne(product, function (err, res) {
                if (err) throw err;
                db.close();
            });
        debugger;

            const token = generateAccessToken(user);
            console.log("token", token);
            return res.json({ token }).send();

        });
    }

}


module.exports= new InsertProduct();


