const express=require('express');
const app = express();
const bodyParser = require 'body-parser';

const morgan = require  ('morgan')
app.set('puerto' , 2023)
app.use(morgan('dev'))

app.use(bodyParser.json)

app.use(require('./routes/routes'))


app.listen(app.get('puerto'), ()=> (
    console.log('El servidor del profesor esta corriendo en el puerto : ', app.get('puerto'))
)

);   