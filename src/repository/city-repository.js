const { City } = require('../models/index');

class CityRepository{
    
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteCity(CityId){
        try{
            await City.destroy({
                where:{
                    id:CityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in repository layer")
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            // The below approach   also work  but will not return updated object
            // if we are using pgsql  the returning true can be used else not
            // const city = City.update(data ,{
            //     where:{
            //         id :cityId 
            //     },
            // })
            
            // for getting updated data in mysql we can use the below approach.
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Something went wrong in repository layer")
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong in repository layer")
            throw {error};
        }
    }

    async getAllCities(){
        try{
            const cities = await City.findAll();
            return cities;
        } catch(error){
            console.log("Something went wrong in repository layer")
            throw {error};
        }
    }
}

module.exports = CityRepository;


