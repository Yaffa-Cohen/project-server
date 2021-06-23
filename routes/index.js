var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");

var MongoClient = require('mongodb').MongoClient;
var urlToCreate = "mongodb://srv1:27017/Community";
var url = "mongodb://srv1:27017/";



// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({ username }, TOKEN_SECRET);
};


//הורץ
// router.get("/createDB", (req, res) => {
//   MongoClient.connect(urlToCreate, function (err, db) {
//    // console.log("err", err)
//     if (err) {
//       console.error(err)
//     } else {
//       console.log("Database created!");
//       db.close();
//     }
//     res.send();
//   });
// })


//הורץ
//create collection:
// router.get("/createUserColection", () => {
//   MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("projectDB");
//     dbo.createCollection("users", function (err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });
// })

//עובד
// /* GET users listing. */
// router.get('/login', function (req, res) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//   const { user_id, user_password } = req.query;
//   //Check the pwd in the server
//   const token = generateAccessToken(user_id);
//   console.log("token", token);
//   return res.json({ token }).send();

//   // res.send('respond with a resource');
// });



router.get("/login", function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  const { user_id, user_password } = req.query;
  //Check the pwd in the server
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Community");
    var query = { user_id };
    dbo.collection("Users").find(query).toArray(function (err, result) {
      if (err) throw err;
      if (!result || result.length === 0) {
        return res.status(401).send();
      }
      db.close();
      if (result[0].user_password === user_password) {
        const token = generateAccessToken(user_id);
        console.log("token", token);
        return res.json({ token }).send();
      } else {
        return res.status(401).send();
      }
    });
  });

});





router.post("/signup", function(req,res) {
  const user = req.body;
  //check
  MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("Community");
    dbo.collection("Users").insertOne(user, function (err,res){
      if(err) throw err;
      console.log("1 document inserted");
      dbo.close();
    });
    const token = generateAccessToken(user);
    console.log("token",token);
    return res.json({ token }).send();
  });
});




module.exports = router;