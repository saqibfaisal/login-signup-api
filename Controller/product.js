// const { request } = require("express")
// const { response } = require("express")
const Joi = require("joi");
const Cart_model = require("../model/applicationSchema")
const cloudinary = require("cloudinary").v2;

// console.log(schema);
const ApplicationController = {
  Plant: (request, response) => {
    const { name, price, size, overview, plantBio, category, image } = request.body;

    console.log(request.body);
    // return
    if (!name || !price || !size || !overview || !plantBio || !category || !image) {
      response.json({
        message: "Required fields are missing",
        status: false,
      });
      return;
    }

    const objtoSend = {
      name: name,
      price: price,
      image: image,
      size: size,
      overview: overview,
      plant_bio: plantBio,
      category: category
    };

    Cart_model.findOne({ name: name, price: price }, (error, plant) => {
      if (error) {
        response.json({
          message: "DB ERROR",
          status: false,
        });
      } else {
        if (plant) {
          response.json({
            message: "Plant already exists in database",
            status: false,
          });
        } else {
          Cart_model.create(objtoSend, (error, plant) => {
            if (error) {
              response.json({
                message: `Internal error ${error}`,
                status: false,
              });
            } else {
              response.json({
                message: "Plant successfully added",
                plant: plant,
                status: true,
              });
            }
          });
        }
      }
    });
  },
  GetPlants: (request,response) => {
    Cart_model.find({}, (error, plants)=> {
        if(error){
            response.json({
                message: "DB ERROR",
                status: false,
            })
        }else{
            response.json({
                message: "Plants successfully get",
                plants,
                status: true
            })
        }
    })
  },
}
module.exports = ApplicationController;