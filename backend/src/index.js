const express=require('express');
const app = express();

const morgan = require  ('morgan')
app.set('puerto' , 2023)
app.use(morgan('dev'))

const coneccion =  require('./database/bd')

/*app.get('/', (req , res) =>{
    res.send('hola a todos')
})

app.get('/equipos', (req , res) =>{
    res.send('hola a todos, esta es la ruta del listado de equipos. ')
})

app.post('/saludo', (req , res) =>{
    res.send('<h1> HOLA A TODOS </h1>hola a todos esto esta corriendo para hacer la prueba por el metodo post. ')
})
*/

app.listen(app.get('puerto'), ()=> (
    console.log('El servidor del profesor esta corriendo en el puerto : ', app.get('puerto'))
)

);   