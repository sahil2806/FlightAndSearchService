const { City } = require('../models/index');
const { Op } = require("sequelize");


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

    async getAllCities(filter){  // Filter Can Also Be Empty Also
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith] :filter.name,
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch(error){
            console.log("Something went wrong in repository layer")
            throw {error};
        }
    }

    async CreateMultipleCity (CityArr){
        try{
            for(let i=0;i<CityArr.length;i++){
                let CityName = CityArr[i];
                const city = await City.create({name:CityName});
            }
            return true;
        }catch(error){
            console.log("Something went wrong in repository layer")
            throw {error};
        }
    }

    async FindAirport(CityId){
        try{
            let airportlist = [];
            const city = await City.findByPk(CityId);
            const airport = await city.getAirports();
            for(let i = 0;i<airport.length;i++){
                const  airport_name = airport[i].dataValues.name;
                airportlist.push(airport_name)
            }
           return airportlist;

        }catch(error){
            console.log("Something went wrong in repository layer")
            throw {error};
        }
    }



}

module.exports = CityRepository;


