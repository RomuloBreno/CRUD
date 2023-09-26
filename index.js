const express = require("express");
const router = require("./routers/items_router");
const app = express();
const port = 3000;
const routerShow = require("./routers/index");

routerShow(app)

app.listen(port, (error)=>{
    if(!error)
        return
    else
        console.log("connected")
})

app.use(router)