const express = require('express');
const path = require('path');
var cors = require("cors");
var recaptchaRouter = require('./routes/recaptcha');
var stripePaymentRouter = require('./routes/stripepayment');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/omnihouse/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.use('/recaptcha', recaptchaRouter);
app.use('/stripepayment', stripePaymentRouter);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/omnihouse/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);