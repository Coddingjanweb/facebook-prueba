const express = require('express');
const  morgan = require('morgan');
const path = require('path');
const app = express();


// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// middlewares
app.use(morgan('dev'));




// routes
app.use(require('./routes/index'))

// statis files




app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});