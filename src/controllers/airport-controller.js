const {AirportService} = require('../services/index');
const airportService = new AirportService();
const {  ClientErrors, ServerErrors, SuccessCodes} = require('../utils/error-codes')


const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            message: 'Successfully created the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}

module.exports = {
    create
}