const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Hello World");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) =>{

    if ( error ){
        throw error;
    }

    console.log(`Express app listening on PORT ${PORT}.`);
})