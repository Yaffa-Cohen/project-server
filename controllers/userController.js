var UserModel = require('../models/userModel.js');
var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");



var url = "mongodb://localhost:27017/Project";


class Login {
    TOKEN_SECRET =
        "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

    generateAccessToken = (username) => {
        return jwt.sign({ username }, TOKEN_SECRET);
    };
    login = (req, res) => {
        try {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
            const { user_name, user_password } = req.query;
            //   if (user == '1' && password == '1')
            //     return res.json({ kind: 'admin' });
            MongoClient.connect(url, async function (err, db) {
                if (err)
                    return res.status(500).send(err);
                var dbo = db.db("Project");
                var query = { user_name, user_password };
                let result
                result = await dbo.collection("user").findOne(query)

                return res.json({ result });
                db.close();
            });
        } catch (error) {
            // throw error
            return res.status(500).json({ error })
        }
    }

    async create(req, res) {
        let userP = new user(req.body)
        console.log(userP);
        let data = await userP.save()
        res.send(data);

    }


}

module.exports = new Login();
/**
 * userController.js
 *
//  * @ :: Server-side logic for managing users.
 */
// module.exports = {

/**
 * userController.list()
 */
    // list: function (req, res) {
    //     UserModel.find(function (err, users) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting user.',
    //                 error: err
    //             });
    //         }

    //         return res.json(users);
    //     });
    // },

/**
 * userController.show()
 */
    //     show: function (req, res) {

    // console.log('aa');
    //         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    //         const { user_name, user_password } = req.query;
    // //Check the pwd in the server
    // const token = generateAccessToken(user);
    // console.log("token", token);
    // return res.json({ token }).send();

    // var user_name = req.params.user_name;
    // var user_password = req.params.user_password;

    //     UserModel.findOne({user_name,user_password}, function (err, useuser_namer) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting user.',
    //                 error: err
    //             });
    //         }

    //         if (!user_name) {
    //             return res.status(404).json({
    //                 message: 'No such user'
    //             });
    //         }

    //         return res.json(user_name);
    //     });
    // },

/**
 * userController.create()
 */
    // create: function (req, res) {
    //     var user = new UserModel({
    // 		user_name : req.body.user_name,
    // 		user_address : req.body.user_address,
    // 		user_password : req.body.user_password,
    //         user_email : req.body.user_email,
    //         is_friend: req.body.is_friend
    //     });

    //     user.save(function (err, user) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when creating user',
    //                 error: err
    //             });
    //         }

    //         return res.status(201).json(user);
    //     });
    // },

/**
 * userController.update()
 */
    // update: function (req, res) {
    //     var id = req.params.id;

    //     UserModel.findOne({_id: id}, function (err, user) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting user',
    //                 error: err
    //             });
    //         }

    //         if (!user) {
    //             return res.status(404).json({
    //                 message: 'No such user'
    //             });
    //         }

    //         user.user_name = req.body.user_name ? req.body.user_name : user.user_name;
    // 		user.user_address = req.body.user_address ? req.body.user_address : user.user_address;
    // 		user.user_password = req.body.user_password ? req.body.user_password : user.user_password;
    //         user.user_email = req.body.user_email ? req.body.user_email : user.user_email;
    //         user.is_friend=  req.body.is_friend? req.body.is_friend: user.is_friend;


    //         user.save(function (err, user) {
    //             if (err) {
    //                 return res.status(500).json({
    //                     message: 'Error when updating user.',
    //                     error: err
    //                 });
    //             }

    //             return res.json(user);
    //         });
    //     });
    // },

/**
 * userController.remove()
 */
    // remove: function (req, res) {
    //     var id = req.params.id;

    //     UserModel.findByIdAndRemove(id, function (err, user) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when deleting the user.',
    //                 error: err
    //             });
    //         }

    //         return res.status(204).json();
    //     });
    // }
// };





// /* GET users listing. */
// router.get('/', function(req, res) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//   const { user, password } = req.query;
//   //Check the pwd in the server
//   const token = generateAccessToken(user);
//   console.log("token", token);
//   return res.json({ token }).send();



//   // res.send('respond with a resource');
// });


// router.post("/signup", function (req, res) {
//     const { user, password } = req.body;
// });


// module.exports = router;

