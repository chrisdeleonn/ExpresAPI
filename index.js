//first step: how to import express library
const express = require("express")
const { getCars, getSingleCar } = require("./src/cars")

//2nd step:create an express app
const app = express()

//third step: setup requests to handle (route always starts with a backslash), (takes 2 parameters)
app.get("/cars/:carID", getSingleCar)
app.get("/cars", getCars)

app.get("/hello", (request, response) => {
  response.send("hello terminal")
})

//last step:listen on a port for requests
app.listen(3000, () => {
  console.log("listening on http://localhost:3000")
})
