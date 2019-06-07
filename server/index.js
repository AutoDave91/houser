const express = require('express');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const app = express();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const path = '//';

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24
    }
}))
massive(CONNECTION_STRING)
    .then(db =>{
        app.set('db', db);
        console.log('Database connected!')
    })
    .catch(()=>{
        console.log("Error connecting to database. :(")
    })



app.listen(SERVER_PORT, ()=>{
    console.log(`Listening on port ${SERVER_PORT}. Waiting on database...`)
})