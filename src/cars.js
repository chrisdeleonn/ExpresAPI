const cars = [
  {
    make: "mazda",
    model: "mx-5",
    year: 1992,
  },
  {
    make: "audi",
    model: "a3",
    year: 2018,
  },
  {
    make: "ford",
    model: "mustang",
    year: 2001,
  },
]
exports.getCars = (request, response) => {
  response.send(cars)
}

exports.getSingleCar = (request, response) => {
  const { carID } = request.params //destructing here, faster
  response.send(cars[carID])
}
