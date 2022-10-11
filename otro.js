const fs = require('fs');

fs.writeFile('./texto.txt', 'El hijo de rana rin...', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');

});

console.log('Hemos terminado');