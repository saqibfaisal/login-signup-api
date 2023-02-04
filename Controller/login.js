const UserModel = require("../model/UserSchema");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");

const loginController = (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body;
    if (!email, !password) {
        res.send({ message: "Required field are missing" })
    }

    UserModel.findOne({ email }, async (error, user) => {
        if (error) {
            res.send(error);
        } else if (user) {
            // console.log(user.password);
            await bcryptjs.compare(password, user, (result, err) => {

                if (!result) {
                    return res.status(401).json({
                        message: "incorrect password"
                    })
                }
                else if (result) {
                    const token = jwt.sign({
                        username: user.username,
                        email: user.email,
                    },
                        "login process",
                        {
                            expiresIn: "24h"
                        })
                    res.status(200).json({
                        username: user.username,
                        // user: user[0].username,
                        email: user.email,
                        token: token
                    })
                }
            })
            // .then((password) => {
            //     if (!password) {
            //         return res.status(401).json({
            //             message: "incorrect password"
            //         })
            //         // res.send({ message: " user successfully login", data: user })
            //     }
            //     else if (password) {
            //         const token = jwt.sign({
            //             username: result.username,
            //             // email: user[0].email,
            //         },
            //             "login process",
            //             {
            //                 expiresIn: "24h"
            //             })
            //         res.status(200).json({
            //             username: result.username,
            //             // user: user[0].username,
            //             // email: user[0].email,
            //             token: token
            //         })
            //     }
            //     else {
            //         res.send({ error: "Invaild User" });
            //     }
            // }).catch((err) => {
            //     res.send(err)
            // })
        } else {
            res.json({ error: "Invaild User" })
        }
    })
}
module.exports = loginController