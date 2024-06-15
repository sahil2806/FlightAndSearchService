const { CityService } = require('../services/index');

const cityService =  new CityService();



const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}
// DELETE. -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

const getAll = async (req,res) =>{
    try{
            
            cities = await cityService.getAllCities(req.query);
            return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched  all the  city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetched all  the city',
            err: error
        });
    }
}

// Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }

}

const createMultiple = async (req,res) =>{
    try{
        
        const createMultiple = await cityService.CreateMultipleCity(req.body.cities);
        return res.status(201).json({
            data: createMultiple,
            success: true,
            message: 'Successfully created multiple city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}


const CityAirport = async (req,res) =>{
    try{
        const airportList = await cityService.FindAirport(req.params.id);
        return res.status(201).json({
            data: airportList,
            success: true,
            message: 'Successfully created multiple city',
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}
 



module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    createMultiple,
    CityAirport

}
