const fs = require('fs');

fs.readFile('./texto.txt', function(err, datos){
    if(err){
        console.log(err);
    }
    console.log(datos.toString());
})

console.log('Saludos amigos');