 const express = require('express');

 const coneccion =  require('../database/bd')

 const router =  express()

 

 router.get('/', (req , res) =>{
    res.send('esta es la ruta de inicio')
})

////////////// listar de modelos   /////////////////



////////////// rutas de modelos   /////////////////
router.get('/modelos', (req , res) =>{
    coneccion.query('SELECT m.id_modelo, m.nombre, f.nombre AS fabricante FROM modelos AS m INNER JOIN fabricantes AS f ON f.id_fabricante=m.id_fabricante ', (error , registros) =>{
        if(error){
            console.log('error en la base de datos', error)
        }else{{
            res.json(registros)
        }}
    })
});


/// traer los datos del modelo por id //

router.get('/modelos/:id_modelo', (req , res) =>{
    const {id_modelo} = req.params
    coneccion.query('SELECT * FROM modelos where id_modelo=?', (id_modelo), (error , registros) =>{
        if(error){
            console.log('error en la base de datos', error)
        }else{{
            res.json(registros)
        }}
    })
});


/////////////////////////////// insert de inserte los modulos ////

router.post('/modelos', (req , res) =>{
    const {nombre , id_frafricante} = req.body
    console.log(req.body)
});
module.exports= router;