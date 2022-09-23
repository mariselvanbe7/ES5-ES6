const path = require('path');
const express = require('express');
const bodyPraser = require('body-parser');

const errorController = require('./controllers/error');

const app1 = express();

app1.set('view engine', 'ejs');
app1.set('views', 'views');



const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');

app1.use(bodyPraser.urlencoded({extended:false}));
app1.use(express.static(path.join(__dirname, 'public')));


app1.use('/admin',adminRouter);
app1.use(shopRouter);

app1.use(errorController.get404);

app1.listen(3000);