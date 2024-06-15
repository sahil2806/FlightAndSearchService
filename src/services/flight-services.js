const {FlightRepository , AirplaneRepository} = require('../repository/index')
const {compareTime} = require('../utils/helper')

class FlightService {
  
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime , data.departureTime)){
                console.log(data.arrivalTime);
                let dateTime1 = new Date(data.arrivalTime);
                let dateTime2 = new Date(data.departureTime);
                console.log(dateTime1)
                console.log(dateTime1.getTime())
                console.log(dateTime2.getTime())
                throw {error:'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight  = await this.flightRepository.createFlight( {...data,totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw {error};
        }
    }
}


module.exports = FlightService;












/**
 * {
 *    flightNumber
 *    airplaneId
 *    departureAirportId
 *    arrivalAirportId
 *    arrivalTime
 *    departureTime
 *    price
 *    totalSeats -> airplane
 * }
*/






