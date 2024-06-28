const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller')
const {FlightMiddleware} = require('../../middlewares/index')
const router = express.Router();






router.post('/city',CityController.create); // To create a city
router.delete('/city/:id',CityController.destroy); //  To delete a particular city
router.get('/city/:id',CityController.get);  // To get a particular city
router.get('/city',CityController.getAll) // To get all the city
router.patch('/city/:id',CityController.update); // To update the particular city
router.post('/cityMultiple',CityController.createMultiple); // To add multiple city in one go
router.get('/cityAirport/:id',CityController.CityAirport);  // To get all the airport of particular city

router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.create);// To create a flight
router.get('/flights',FlightController.getAll); // To get all the  flight
router.get('/flights/:id' ,FlightController.get); // To get a particular flight
router.patch('/flights/:id',FlightController.update); // To update the particular flight

router.post('/airports', AirportController.create); //  To create a airport


module.exports = router;



