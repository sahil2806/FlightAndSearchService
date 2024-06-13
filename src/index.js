const express = require('express');
const {PORT}  = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index')

// const db = require('./models/index');
// const sequelize = require('sequelize');
const {City,Airport} = require('./models/index');
 



const setupAndStartServer = async () => {
    

    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes);
    


    app.listen(3000,async ()=>{
        console.log(`Server started at ${PORT}`);

        // db.sequelize.sync({alter : true});

        // const city = await City.findOne({
        //     where : {
        //         id:17
        //     }
        // })
        // console.log(cities);

        // const airport = await cities.getAirports();
        // console.log(airport);
    
        // If i want to create a airport in the bangalore

        // const newairport = Airport.create({
        //     name:'jindal vijaynagar Airport',
        //     cityId:17
        // })

        // const newairport = await Airport.findOne({
        //     where:{
        //         id:4
        //     }
        // })

        //  await city.addAirport(newairport);

        




        
        

    })

    
}







setupAndStartServer();













