require('dotenv').config();


const express = require('express');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');



const app = express();

app.use(morgan('dev'))
app.use(cookieParser())

const cors = require('cors');

const apiRouter = require('./app/router');



const session = require('express-session');

app.use( session({
    saveUninitialized: true,
    resave: true,
    secret: 'Guess it !',
    cookie: {
        secure: false, // sans cet option, express-session nous force à être https
        maxAge: 1000*60*60*2 // 2 heures !
    }
}));




const port = process.env.PORT || 5555;

app.use(cors({
    origin:'http://localhost:8080',
    credentials:true,
    // allowedHeaders:'Content-Type, x-requested-with, Authorization',
    methods:'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS'
}));


app.use(express.json());

app.use('/v1', apiRouter);



app.listen(port,() => console.log(`Server is running on http://localhost:${port}`));  