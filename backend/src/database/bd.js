const mysql = require ('mysql');

const mysqlconeccion = mysql.createConnection ({
    host:'localhost',
    users:'root',
    passsword:'cypresshill1',
    databases:'comisionB2023' 
});

mysqlconeccion.connect(function(err){
    if(err){
        console.log('mi error es: ',err)
        return;
    }else{
        console.log('Mi coneccion se realizo correctamente!! y estoy muy satisfecho')
    }
});

module.exports= mysqlconeccion; 