var express = require('express') // importa el paquete express
var app = express()

var usuarios =[    
    {
        id:1,
        nombre:'Stan',
        cedula:'1719105262'
    },
    {
        id:2,
        nombre:'Pepito',
        cedula:'1715548888'
    },
    {
        id:3,
        nombre:'HDP',
        cedula:'0001654654'
    }
]
var contador = ;

/*app.get('/TecnologiasWeb', function (req, res) {
    res.send('Con JavaScript!')
})*/

app.get('/Usuario', function (req, res) {
    res.json(usuarios);
    
})

app.get('/Usuario/:idEnURL', function (req, res) {
    var idUsuario = req.params.idEnURL;
    
    for (var i=0; i<usuarios.length; i++){
        if(idUsuario==usuarios[i].id){
            res.json(usuarios[i]);
        } 
    }
    res.send('No existe el usuario');
})

app.post('/TecnologiasWeb', function (req, res) {
    
    
    
    /*
    var parametros = req.params;
    console.log(parametros);
    var usuario={
        nombre: 'Stan',
        cedula:'1719105262'
    }
    
    usuario.apellido='Gumn';
    usuario.mascotas=[];
    usuario.casado=false;
    
    //res.append('token', '1234');
    
    //headers.token=1234;
    res.json(usuario);
    
    
    console.log("Lo que tengo en el request es: ")
    console.log(req);
    console.log("Lo que tengo en el response es: ")
    console.log(res);

   
    console.log("Cabecera de  request es: ")
    console.log(req.headers);
    console.log("Cabecera de  response es: ")
    console.log(res.headers);

    
    res.send('{nombre:Stan,cedula:1719105262}')
    */
})

app.listen(5050, function () {
    console.log('Example app listening on port 5050!')
})