require('./Connection');
const Cliente = require('./models/Clientes');

const ClienteNuevo = new Cliente({
    codigo_cliente : "WJD-843",
    CI : 13124477,
    nombre : "Argus",
    apellidos: "Aphocraphex",
    direccion: "Av. SolaPorqueSi N 69",
    codigo_postal: 2345,
    ciudad: "Sucre",
    pais: "Bolivia",
    telefono: 74662985
});

ClienteNuevo.save((err , document)=>{
    if(err)console.log(err);
    console.log(document);
});

console.log(ClienteNuevo);
