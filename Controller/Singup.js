const UserModel = require("../model/UserSchema");
const bcryptjs = require("bcryptjs")
const signupController = async (req, res) => {
    // console.log("hit", req.body);
    const { email, password } = req.body
    if (!email, !password) {
        return res.json({ message: "Required field are missing" })
    }
    // else if (password != confirmpassword) {
    //     return res
    //         .status(400)
    //         .send({ status: 400, message: "not match the password" });
    // }
    else {
        const hashPassword = await bcryptjs.hash(password, 10);
        const userObj = {
            ...req.body,
            password: hashPassword
        }
        UserModel.findOne({ email }, (error, user) => {
            if (error) {
                res.send(error);
            } else if (user) {
                res.json({ message: "email is already exist" })
            } else {
                UserModel.create(userObj, (err, _) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send({ message: "user successfully signup" })
                    }
                })
            }
        })
    }
}
module.exports = signupController;