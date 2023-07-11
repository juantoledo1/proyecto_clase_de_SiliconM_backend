/*const mysql = require ('mysql');

const mysqlconeccion = mysql.createConnection({
    host:'localhost',
    users:'root',
    passsword:'cypresshill1',
    databases:'comisionb2023' 
});

mysqlconeccion.connect(function(err){
    if(err){
        console.log('mi error es: ',err)
        return;
    }else{
        console.log('Mi coneccion se realizo correctamente!! y estoy muy satisfecho')
    }
});

module.exports= mysqlconeccion;   */

const mysql = require('mysql');

const mysqlConeccion= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'cypresshill1',
    database: 'comisionB2023'
});

mysqlConeccion.connect(function(err){
    if(err){
        console.log('Mi error de conexion es: ', err)
        return;
    }else{
        console.log('Mi coneccion se realizo correctamente!! y estoy muy feliz')
    }
})

module.exports=mysqlConeccion;