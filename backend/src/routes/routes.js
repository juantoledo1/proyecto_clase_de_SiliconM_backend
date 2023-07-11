 const express = require('express');

 const coneccion =  require('../database/bd')

 const router =  express()

 

 router.get('/', (req , res) =>{
    res.send('esta es la ruta de inicio')
})

router.get('/modelos', (req , res) =>{
    coneccion.query('select * from modelos', (error , registros) =>{
        if(error){
            console.log('error en la base de datos', error)
        }else{{
            res.json(registros)
        }}
    })
});


module.exports= router;