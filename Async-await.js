require('./Connection');
const Cliente = require('./models/Clientes');

async function Main(){
    
    const clienteNuevo = new Cliente({
        codigo_cliente : "HJK-293",
        CI : 78651234,
        nombre : "Elon",
        apellidos: "Musk",
        direccion: "Av. Tesla N IA",
        codigo_postal: 1100,
        ciudad: "San Francisco",
        pais: "U.S",
        telefono: 23098419
    })

    const clienteGuardado = await clienteNuevo.save();
    console.log(clienteGuardado);
    return clienteGuardado;
}

Main()
    .then(clienteGuardado => console.log(clienteGuardado))
    .catch(err => console.log(err))
