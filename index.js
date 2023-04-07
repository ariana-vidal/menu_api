const express = require('express');
const app = express();
const login_routes = require('./routes/login_routes');


app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/auth/login', login_routes);

app.listen(3000);