const express = require("express")
const config  = require("./config")
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use("/",                require("./routes/index"))
app.use("/darkpool",        require("./routes/darkpool/index"))
/* Listening on the port specified in the config.json file. */
app.listen(config.hostPort,function(){
    console.log(`Now listening on ${config.hostPort}`)
})
