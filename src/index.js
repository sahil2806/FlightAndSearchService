const express = require('express');
const {PORT}  = require("./config/serverConfig");
const bodyparser = require("body-parser")

const setupAndStartServer = async () => {
    
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    
    app.listen(3000,()=>{
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();













