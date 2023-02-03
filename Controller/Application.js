// const { request } = require("express")
// const { response } = require("express")
const ApplicationModel = require("../model/applicationSchema")

const ApplicationController = {
    getApplication: (request, response) => {
        response.json({
            message: "successfully get",
            status: true,
            products: [
                {
                    name: "Keyboard",
                },
                {
                    name: "CPU",
                },
                {
                    name: "MOUSE",
                },
            ],
        });
    }
}
module.exports = ApplicationController;