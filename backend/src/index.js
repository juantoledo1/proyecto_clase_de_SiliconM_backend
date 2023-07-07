const express=require('express');
const app = express();

const morgan = require  ('morgan')
app.set('puerto' , 2023)
app.use(morgan('dev'))

app.get('/', (req , res) =>{
    res.send('hola a todos')
})

app.get('/hola', (req , res) =>{
    res.send('hola a todos, esto recien ingrese. ')
})

app.post('/saludo', (req , res) =>{
    res.send('<h1> HOLA A TODOS </h1>hola a todos esto esta corriendo para hacer la prueba por el metodo post. ')
})


app.listen(app.get('puerto'), ()=> (
    console.log('El servidor del profesor esta corriendo en el puerto : ', app.get('puerto'))
)

)   