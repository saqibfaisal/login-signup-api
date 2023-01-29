const UserModel = require("../model/UserSchema");
const bcryptjs = require("bcryptjs")
const signupController = async (req, res) => {
    console.log("hit", req.body);
    const { username, email, password, contact } = req.body

    if (!username, !email, !password, !contact) {
        return res.json({ message: "Required field are missing" })
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    // console.log(hashPassword, "hashPassword");
    const userObj = {
        ...req.body,
        password: hashPassword
    }
    // console.log(userObj);
    UserModel.findOne({ email }, (error, user) => {
        // console.log(user);
        // console.log(error);
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
module.exports = signupController;