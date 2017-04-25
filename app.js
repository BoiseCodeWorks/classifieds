/**
 * I need a way to make Cars
 * We need a list to store Cars in
 * draw to screen every car in the list
 */
var carsList = document.getElementById("cars-list")
var cars = []
function Car(picture, price, description, condition, make, model, year, doors, contact) {
  this.picture = picture
  this.price = price
  this.description = description
  this.condition = condition
  this.make = make
  this.model = model
  this.year = year
  this.doors = doors
  this.contact = contact
  cars.push(this)
}
var jasonsCar = new Car("http://lorempixel.com/200/200/transport", 5, "gray", "like new", "toyota", "prius", 2010, 4, "208-555-9836")
var jakesCar = new Car("http://lorempixel.com/200/200/transport", 500, "silver", "parts", "chrysler", "300M", 2000, 4, "takethisheepofjunk@gmail.com")

function drawCars(arrCars) {
  var template = ''
  for (var i = 0; i < arrCars.length; i++) {
    var car = arrCars[i]
    template += `
      <div class="col-sm-4">
        <img src="${car.picture}">
        <h4>${car.make} ${car.model} ${car.year}</h4>
      </div>
    `

  }
  carsList.innerHTML = template
}

function createCar(e) {
  e.preventDefault()
  var form = e.target
  new Car(
    form.picture.value,
    form.price.value,
    form.description.value,
    form.condition.value, 
    form.make.value, 
    form.model.value, 
    form.year.value, 
    form.doors.value, 
    form.contact.value)
  form.reset()
  drawCars(cars)
}


drawCars(cars)






// requirements
/**
 * 5 years experience, high school diploma, must like cats
 * 
 * 
 * {
 *  requirements: [
 *    "5 years experience",
 *    "high school diploma",
 *    "must like cats"
 *  ] 
 * }
 * 
 * given a string seperate the string into an array base on the commas in the string
 * 
 * 
 */