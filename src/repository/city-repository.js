const {City} = require("../models/index");

class CityRepository{

    async createCity({name}){
        try{
            const city = await City.create({name});
        }catch(error){
            throw {error};
        }
    }

    async deleteCity({CityId}){
        try{
            await City.destroy({
                where:{
                    id:CityId
                }
            });
        }catch(error){
            throw {errow};
        }
    }
}


module.exports = CityRepository;


