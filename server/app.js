console.clear();
const express = require('express');
const cors = require('cors');

require('dotenv').config()
const app = express();

app.use(cors());
app.use(express.json());

const routesMariaDB = require('./src/routes/mariadb.routes')
const routesMongoDB = require('./src/routes/mongodb.routes')

app.use(routesMariaDB)
app.use(routesMongoDB)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

