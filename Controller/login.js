const UserModel = require("../model/UserSchema");
const bcryptjs = require("bcryptjs")


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
            await bcryptjs.compare(password, user.password)
                .then((password) => {
                    if (password) {
                        res.send({ message: " user successfully login", data: user })
                    } else {
                        res.send({ error: "Invaild User" });
                    }
                }).catch((err) => {
                    res.send(err)
                })
        } else {
            res.json({ error: "Invaild User" })
        }
    })
}
module.exports = loginController