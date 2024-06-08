const express = require('express');
const {PORT}  = require("./config/serverConfig");


const setupAndStartServer = async () => {
    
    const app = express();
    app.listen(3000,()=>{
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();













