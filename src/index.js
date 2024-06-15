const express = require('express');
const {PORT}  = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index')

const db = require('./models/index');
const {City,Airport,Airplane} = require('./models/index');



const setupAndStartServer = async () => {
    

    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes);
    

    app.listen(3000,async ()=>{
        console.log(`Server started at ${PORT}`);

        if(process.env.SYNC_DB){
            db.Sequelize.sync({alter:true});
        }

       

      

    })


}







setupAndStartServer();













