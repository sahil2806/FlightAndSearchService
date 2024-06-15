const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update);
router.post('/cityMultiple',CityController.createMultiple); // To add multiple city in one go
router.get('/cityAirport/:id',CityController.CityAirport);  // To get all the airport 

router.post('/flights',FlightController.create);

module.exports = router;



