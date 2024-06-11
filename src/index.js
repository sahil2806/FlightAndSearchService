const express = require('express');
const {PORT}  = require("./config/serverConfig");
const bodyparser = require("body-parser")
// const CityRepository = require("./repository/city-repository")
 

const setupAndStartServer = async () => {
    
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    
    app.listen(3000, ()=>{
        console.log(`Server started at ${PORT}`);
       // const repo = new CityRepository();
        
        //repo.createCity({name:"America"});
        //repo.deleteCity({CityId : "8"});
    })
}




setupAndStartServer();













